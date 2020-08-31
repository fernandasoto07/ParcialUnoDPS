import { Component, OnInit } from '@angular/core';
import { Conn } from '../conn'

// test
// import { SqlService } from "../sql.service"

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  data : any
  constructor() { }

  ngOnInit(): void {
    // let conn = new Conn("root","","localhost","libros");
    // conn.upLink()
    // conn.query()
    // conn.downLink()
    this.data = new Conn('admin','123qwerty')
    let select = "select * from clientes"
    let query1 = "Insert into clientes values (100,'Gerardo','Lopez','mi casaxd','natal')"
    let query2 = "delete from clientes where idcliente = 100"
    let multi = "Insert into clientes values (102,'Gerardo','Lopez','mi casaxd','natal');Insert into clientes values (103,'Gerardo','Lopez','mi casaxd','natal');"
    this.data.myQuery(true,select)
  }

  clic(){
    console.log(this.data.data)
  }
}
