import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule}from '@angular/platform-browser'

@Component({
 selector: 'app-lista',
 templateUrl: './lista.component.html',
 styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  ClienteLista=[];
  id:number;
  nombre:string;
  dui:number;
  vehiculo:string;
  costo:number;

  constructor() { }

  ngOnInit() {
  
  }
}
