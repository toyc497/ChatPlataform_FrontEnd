import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { webSocket } from 'rxjs/webSocket';
import { EMPTY, Observable, Subject, catchError, delayWhen, retryWhen, switchAll, tap, timer } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WebsocketconnectionService {

  private subject = webSocket(environment.ws_urlConnection);

  constructor(){}

  connect(){

    this.subject.subscribe({
      next: msg => {console.log('Mensagem recebida: '+JSON.stringify(msg))},
      error: err =>  console.log('ERRO: '+ err)
    });

  }

  sendMessage(mensagem: string){
    this.subject.next(
      {message: `${mensagem}`}
    );
  }

}