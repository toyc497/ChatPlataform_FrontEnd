import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Sistemas } from 'src/app/interfaces/Sistemas';
import { DataService } from 'src/app/services/DataService';
import { SistemaService } from 'src/app/services/SistemaService';

@Component({
  selector: 'app-sistemas-page',
  templateUrl: './sistemas-page.component.html',
  styleUrls: ['./sistemas-page.component.css']
})
export class SistemasPageComponent {

  sistemasChat: Sistemas[] = [];

  constructor(private sistemaService: SistemaService, private dataService: DataService, private router: Router){}

  ngOnInit(): void{

    this.sistemaService.getAllSistemas().subscribe(
      (sistema) => (this.sistemasChat = sistema)
    );

  }

  deleteSistemaAction(sistema: Sistemas): void{
    const idDelete = sistema.id;
    this.sistemaService.deleteSistema(idDelete).subscribe();

    let indexSistemaChat = this.sistemasChat.indexOf(sistema);
    this.sistemasChat.splice(indexSistemaChat,1);
  }

  pregoesSystem(sistema: Sistemas): void{

    this.dataService.setSistema(sistema);
    this.router.navigateByUrl('/edital');

  }

  credenciaisSystem(sistema: Sistemas): void{

    this.dataService.setSistema(sistema);
    this.router.navigateByUrl('/contaUsuario');

  }

}
