import { Component } from '@angular/core';
import { Mensagem } from 'src/app/interfaces/Mensagem';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent {

  listMensagens: Mensagem[] = [
    {id: 0, origem: 'Pregoeiro', dataHora: '31/05/2023 11:39:41', conteudo: 'O pregão está aberto para receber propostas, o licitante 1 retornou OK, o licitante 1 retornou OK, o licitante 1 retornou OK, o licitante 1 retornou OK, o licitante 1 retornou OK, o licitante 1 retornou OK, Microtecnica Microtecnica Microtecnica Microtecnica Microtecnica Microtecnica Microtecnica', edital_id: 1},
    {id: 0, origem: 'Pregoeiro', dataHora: '31/05/2023 11:39:41', conteudo: 'O pregão está aberto para receber propostas, o licitante 1 retornou OK, o licitante 1 retornou OK, o licitante 1 retornou OK, o licitante 1 retornou OK, o licitante 1 retornou OK, o licitante 1 retornou OK,', edital_id: 1},
    {id: 0, origem: 'Pregoeiro', dataHora: '31/05/2023 11:39:41', conteudo: 'O pregão está aberto para receber propostas, o licitante 1 retornou OK, o licitante 1 retornou OK, o licitante 1 retornou OK, o licitante 1 retornou OK, o licitante 1 retornou OK, o licitante 1 retornou OK, Microtecnica Microtecnica Microtecnica Microtecnica Microtecnica Microtecnica Microtecnica,', edital_id: 1},
    {id: 0, origem: 'Pregoeiro', dataHora: '31/05/2023 11:39:41', conteudo: 'O pregão está aberto para receber propostas, o licitante 1 retornou OK, o licitante 1 retornou OK, o licitante 1 retornou OK, o licitante 1 retornou OK, o licitante 1 retornou OK, o licitante 1 retornou OK,', edital_id: 1},
    {id: 0, origem: 'Pregoeiro', dataHora: '31/05/2023 11:39:41', conteudo: 'O pregão está aberto para receber propostas, o licitante 1 retornou OK, o licitante 1 retornou OK, o licitante 1 retornou OK, o licitante 1 retornou OK, o licitante 1 retornou OK, o licitante 1 retornou OK, Microtecnica Microtecnica Microtecnica Microtecnica Microtecnica Microtecnica Microtecnica,', edital_id: 1},
    {id: 0, origem: 'Pregoeiro', dataHora: '31/05/2023 11:39:41', conteudo: 'O pregão está aberto para receber propostas, o licitante 1 retornou OK, o licitante 1 retornou OK, o licitante 1 retornou OK, o licitante 1 retornou OK, o licitante 1 retornou OK, o licitante 1 retornou OK,', edital_id: 1},
    {id: 0, origem: 'Pregoeiro', dataHora: '31/05/2023 11:39:41', conteudo: 'O pregão está aberto para receber propostas, o licitante 1 retornou OK, o licitante 1 retornou OK, o licitante 1 retornou OK, o licitante 1 retornou OK, o licitante 1 retornou OK, o licitante 1 retornou OK, Microtecnica Microtecnica Microtecnica Microtecnica Microtecnica Microtecnica Microtecnica,', edital_id: 1}
  ];

  ngOnInit(): void{

  }

}
