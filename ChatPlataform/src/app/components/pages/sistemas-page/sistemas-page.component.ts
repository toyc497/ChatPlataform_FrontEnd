import { Component } from '@angular/core';
import { Sistemas } from 'src/app/interfaces/Sistemas';
import { SistemaService } from 'src/app/services/SistemaService';

@Component({
  selector: 'app-sistemas-page',
  templateUrl: './sistemas-page.component.html',
  styleUrls: ['./sistemas-page.component.css']
})
export class SistemasPageComponent {

  sistemasChat: Sistemas[] = [];

  constructor(private sistemaService: SistemaService){}

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

}
