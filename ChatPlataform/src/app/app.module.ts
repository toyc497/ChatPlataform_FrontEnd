import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicialComponent } from './components/inicial/inicial.component';
import { HeaderComponent } from './components/pages/header/header.component';
import { AlertaMensagensComponent } from './components/pages/alerta-mensagens/alerta-mensagens.component';
import { SistemasPageComponent } from './components/pages/sistemas-page/sistemas-page.component';

@NgModule({
  declarations: [
    AppComponent,
    InicialComponent,
    HeaderComponent,
    AlertaMensagensComponent,
    SistemasPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
