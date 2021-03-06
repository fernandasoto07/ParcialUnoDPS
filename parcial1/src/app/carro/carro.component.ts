import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Conn } from '../conn'

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {

  nombre : string = 'nissan'
  placa : string = '987654'

  @Input() inStateCar : any
  @Output() outStateCar = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void { }

  onSubmit(){
    let conn = new Conn()
    let query : string

    if(this.inStateCar == null) query = `insert into tallerVehiculo values ('${this.placa}', '${this.nombre}');`
    else query = 
      `insert into tallerCliente values ('${this.inStateCar.dui}', '${this.inStateCar.nombre}', 0);
      insert into tallerVehiculo values ('${this.placa}', '${this.nombre}');`; 

    this.inStateCar = null
    console.log(query)
    conn.myQuery(false, query)
    this.outStateCar.emit( this.inStateCar )
  }

  onClose(){
    this.nombre = ''
    this.placa = ''
  }
}
