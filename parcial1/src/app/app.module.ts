import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import {FormsModule} from '@angular/forms';
import { ListaComponent } from './lista/lista.component'
import { ClienteComponent } from './cliente/cliente.component';
import { CarroComponent } from './carro/carro.component'

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    ListaComponent,
    ClienteComponent,
    CarroComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }