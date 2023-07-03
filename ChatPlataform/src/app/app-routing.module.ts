import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/pages/header/header.component';
import { AlertaMensagensComponent } from './components/pages/alerta-mensagens/alerta-mensagens.component';
import { CoresPageComponent } from './components/pages/cores-page/cores-page.component';
import { ContaUsuarioComponent } from './components/pages/conta-usuario/conta-usuario.component';
import { EditalPageComponent } from './components/pages/edital-page/edital-page.component';
import { ChatPageComponent } from './components/pages/chat-page/chat-page.component';
import { SistemasPageComponent } from './components/pages/sistemas-page/sistemas-page.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/sistema', pathMatch: 'full'},
  {path: 'sistema', component: SistemasPageComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'alertas', component: AlertaMensagensComponent},
  {path: 'cores', component: CoresPageComponent},
  {path: 'credenciais', component: ContaUsuarioComponent},
  {path: 'pregao', component: EditalPageComponent},
  {path: 'chat', component: ChatPageComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
