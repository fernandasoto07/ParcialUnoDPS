import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = 'cualquier cosa';
  cont = 1
  testPadre : any
  
  write(val : any){
    this.testPadre = val
    this.message = 'nuevo valor '+this.cont ++
    this.print()
  }

  print(){console.log(this.testPadre)}
}