import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit {

  @Input() carroLista : any
  
  constructor() { }

  ngOnInit(): void {
  }

}
