import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {

  carro = {
    nombre : '',
    placa : ''
  }

  test = "texto de prueba xd"
  @Input() dataCarro : any
  @Output() newData = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void { }

  passingData(){
    this.newData.emit(this.test)
    console.log(this.dataCarro)
  }

}
