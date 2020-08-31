import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  @Input() inStateCli : any
  @Output() outStateCli = new EventEmitter<any>()

  nombre : string = ''
  dui : string = ''

  constructor() { }

  ngOnInit(): void { }

  onSubmit(){
    this.inStateCli = {
      nombre : this.nombre,
      dui :this.dui
    }
    console.log(this.inStateCli)
    this.outStateCli.emit( this.inStateCli )
  }

  onClose(){
    this.nombre = ''
    this.dui = ''
  }

}