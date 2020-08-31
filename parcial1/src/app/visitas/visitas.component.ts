import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.component.html',
  styleUrls: ['./visitas.component.css']
})
export class VisitasComponent implements OnInit {
  nombre : string
  placa : string
  motivo : string
  costo : number

  @Input() inStateVis : any
  @Output() outStateVis = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

}
