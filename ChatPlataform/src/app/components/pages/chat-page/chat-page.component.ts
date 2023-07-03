import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Mensagem } from 'src/app/interfaces/Mensagem';
import { DataService } from 'src/app/services/DataService';
import { ChatService } from 'src/app/services/chat.service';
import { WebsocketchatconnectService } from 'src/app/services/websocketchatconnect.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent {

  listMensagensPregao: Mensagem[] = [];

  idEdital: number = 0

  constructor(private chatService: ChatService ,private dataService: DataService, private websocketchatconnectService: WebsocketchatconnectService, private httpClient: HttpClient){}

  ngOnInit(): void{

    this.idEdital = this.dataService.getIdEdital();

    this.findAllMessagesByIdEdital(this.idEdital);

  }

  findAllMessagesByIdEdital(idEditalMessages: number){

    this.chatService.getAllMessagesByEditalId(idEditalMessages).subscribe(
      (messagesResponse) => {this.listMensagensPregao = messagesResponse}
    );

  }

  

}
