export class Conn {

  info: any
  body = new FormData()

  constructor(
    user : string = 'root', 
    pswd : string = '' ,
    host : string = 'localhost', 
    db : string = "id14021897_dps"
  ){
    this.body.append('host' , host)
    this.body.append('user' , user)
    this.body.append('pswd' , pswd)
    this.body.append('db' , db)
  }

  myQuery( select:boolean = false, query:string = '' ) : any{

    this.body.append('query',query)
    this.body.append('select',select.toString())

    fetch('http://localhost/test/',{
      method:'POST',
      body: this.body
    })
    .then( res => { return res.json() })
    .catch( error => console.error('Error:', error))
    .then( myJson => { 
      this.info = myJson
    })
  } 
}