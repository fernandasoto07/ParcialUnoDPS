import { Component, OnInit } from '@angular/core';
import { Conn } from './conn'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  stateData : any = null
  tableData = {
    clientes : [],
    vehiculo : [],
    visitas : []
  }
  conn = new Conn();

  ngOnInit(){
    this.viewClient()
    // this.viewVehiculos()
    // this.viewVisitas()
  }
  
  updateState(newState : any){ this.stateData = newState }

  viewClient(){
    let  query = 'Select * from `tallerCliente`;'
    this.conn.myQuery(true,query)
    this.tableData.clientes = this.conn.info.data
  }

  viewVehiculos(){
    let  query = 'Select * from `tallerVehiculo`;'
    this.conn.myQuery(true,query)
    this.tableData.vehiculo = this.conn.info.data
  }

  viewVisitas(){
    let  query = 'Select * from `tallerVisitas`;'
    this.conn.myQuery(true,query)
    this.tableData.visitas = this.conn.info.data
  }
}