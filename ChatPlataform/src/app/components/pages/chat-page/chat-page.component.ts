import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { palavraChave } from 'src/app/interfaces/PalavraChave';
import { DataService } from 'src/app/services/DataService';
import { MensagemAlertaService } from 'src/app/services/MensagemAlerta.service';
import { BotrequestmessageService } from 'src/app/services/botrequestmessage.service';
import { ChatService } from 'src/app/services/chat.service';
import { ChatmessagesdataService } from 'src/app/services/chatmessagesdata.service';
import { WebsocketconnectionService } from 'src/app/services/websocketconnection.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatPageComponent implements OnInit{

  mensagensDataChat: any;

  palavraChaveList: palavraChave[] = [];

  constructor(private websocketconnectionService: WebsocketconnectionService ,private mensagemAlertaService:MensagemAlertaService ,private chatService: ChatService ,private dataService: DataService, private chatmessagesdataService: ChatmessagesdataService, private botrequestmessageService: BotrequestmessageService){}
  
  ngOnInit(): void {

    this.websocketconnectionService.connect();
    
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

}
