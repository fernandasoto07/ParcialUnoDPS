import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-meets',
  templateUrl: './meets.component.html',
  styleUrls: ['./meets.component.css']
})
export class MeetsComponent implements OnInit {

  @Input() visitaLista : any
  constructor() { }

  ngOnInit(): void {
  }

}
