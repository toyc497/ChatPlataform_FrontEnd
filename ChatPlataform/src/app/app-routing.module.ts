import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicialComponent } from './components/inicial/inicial.component';
import { HeaderComponent } from './components/pages/header/header.component';
import { AlertaMensagensComponent } from './components/pages/alerta-mensagens/alerta-mensagens.component';
import { SistemasPageComponent } from './components/pages/sistemas-page/sistemas-page.component';

const routes: Routes = [
  {path: '', component: InicialComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'alertaMensagens', component: AlertaMensagensComponent},
  {path: 'sistemas', component: SistemasPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
