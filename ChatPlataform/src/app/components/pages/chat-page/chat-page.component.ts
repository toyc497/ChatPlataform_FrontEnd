import { Component, OnInit } from '@angular/core';
import { Mensagem } from 'src/app/interfaces/Mensagem';
import { palavraChave } from 'src/app/interfaces/PalavraChave';
import { DataService } from 'src/app/services/DataService';
import { MensagemAlertaService } from 'src/app/services/MensagemAlerta.service';
import { ChatService } from 'src/app/services/chat.service';
import { ChatmessagesdataService } from 'src/app/services/chatmessagesdata.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit{

  //[{id: 1, origem: '', dataHora: '', conteudo: 'Microtecnica',edital:{id: 0, chaveEdital: '', numeroPregao: 0, orgao: '', lote: 0,sistema: {"id":0,"nome":""}}},{id: 2, origem: '', dataHora: '', conteudo: 'Vertical',edital:{id: 0, chaveEdital: '', numeroPregao: 0, orgao: '', lote: 0,sistema: {"id":0,"nome":""}}}];

  palavraChaveList: palavraChave[] = [];

  mensagemChatAtual: string = "";

  //idEdital: number = 0;

  constructor(private mensagemAlertaService:MensagemAlertaService ,private chatService: ChatService ,private dataService: DataService, private chatmessagesdataService: ChatmessagesdataService){}

  ngOnInit(): void{

    //this.idEdital = this.dataService.getIdEdital();

    //this.generateTableOfChat();

    this.showMessages();

  }

  /*
  generateTableOfChat(): void{

    let listItems: any = this.listMensagensPregao;

    console.log("EDITAL: "+this.idEdital);
    console.log("LISTA MENSAGENS: "+JSON.stringify(this.listMensagensPregao));

    let quantItems = listItems.length;
    let increment = 0;

    while(increment < quantItems){

      const tbRowsContainer = document.getElementById('tableRowsContainer');

      const divRowCont = document.createElement("div");
      divRowCont.style.width = '100%';
      divRowCont.style.display = 'flex';

      console.log("TESTE: "+JSON.stringify(listItems));

      const elementTableRow = `<div style="width: 15%; padding: 10px">${listItems[increment].id}</div>
                                <div style="width: 20%; padding: 10px">tb2</div>
                                  <div style="width: 65%; padding: 10px">${listItems[increment].conteudo}</div>`;

      divRowCont.innerHTML = elementTableRow;
      
      tbRowsContainer?.appendChild(divRowCont);

      increment += 1;
    }

  }
  */

  /*
  verifyKeyWordInChat(mensagemChatRecieved: string): any{

    
  }
  */

  showMessages(): void{

    console.log(this.chatmessagesdataService.getListaMensagens());

  }

}
