import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/pages/header/header.component';
import { AlertaMensagensComponent } from './components/pages/alerta-mensagens/alerta-mensagens.component';
import { SistemasPageComponent } from './components/pages/sistemas-page/sistemas-page.component';
import { CoresPageComponent } from './components/pages/cores-page/cores-page.component';
import { ContaUsuarioComponent } from './components/pages/conta-usuario/conta-usuario.component';
import { EditalPageComponent } from './components/pages/edital-page/edital-page.component';
import { ChatPageComponent } from './components/pages/chat-page/chat-page.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlertaMensagensComponent,
    SistemasPageComponent,
    CoresPageComponent,
    ContaUsuarioComponent,
    EditalPageComponent,
    ChatPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
