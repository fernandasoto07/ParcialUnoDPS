export class Conn {

  info: any
  body = new FormData()

  constructor(
    user : string = 'id14021897_jlopzz', 
    pswd : string = '123QWE456rty!' ,
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

    console.log(query)

    fetch('https://jlopzzweb.000webhostapp.com/',{
      method:'POST',
      body: this.body
    })
    .then( res => { return res.json() })
    .catch( error => console.error('Error:', error))
    .then( myJson => { 
      console.log(myJson)
      this.info = myJson
    })
  } 
}