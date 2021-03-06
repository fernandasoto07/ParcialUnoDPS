import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import {FormsModule} from '@angular/forms';
import { ListaComponent } from './lista/lista.component'
import { ClienteComponent } from './cliente/cliente.component';
import { CarroComponent } from './carro/carro.component';
import { VisitasComponent } from './visitas/visitas.component';
import { CarrosComponent } from './carros/carros.component';
import { MeetsComponent } from './meets/meets.component'

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    ListaComponent,
    ClienteComponent,
    CarroComponent,
    VisitasComponent,
    CarrosComponent,
    MeetsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }