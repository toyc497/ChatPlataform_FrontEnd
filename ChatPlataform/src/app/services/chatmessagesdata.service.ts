import { Injectable } from '@angular/core';
import { Mensagem } from '../interfaces/Mensagem';
import { ChatService } from './chat.service';
import { DataService } from './DataService';

@Injectable({
  providedIn: 'root'
})
export class ChatmessagesdataService {

  mensagensPregao: Mensagem[] = [];

  constructor(private chatService: ChatService, private dataService: DataService) { }

  setListaMensagens(){

    const idEdital: number = this.dataService.getIdEdital();

    this.chatService.getAllMessagesByEditalId(idEdital).subscribe(
      chatResponse => this.mensagensPregao = chatResponse
    );

  }

  getListaMensagens(){
    return this.mensagensPregao;
  }

}
