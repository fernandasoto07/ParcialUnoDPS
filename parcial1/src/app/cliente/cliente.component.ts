import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente'

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente= new Cliente(1,'',18928347-8,'',10.50);
  enviar = false;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.enviar=true;
  }

}
