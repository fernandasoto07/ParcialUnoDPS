import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import {FormsModule} from '@angular/forms';
import { ListaComponent } from './lista/lista.component'

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    ListaComponent,
   
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }