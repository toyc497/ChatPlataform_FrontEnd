import { Injectable } from '@angular/core';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class WebsocketchatconnectService {

  socket = new SockJS(environment.websocketUrl);
  stompClient = Stomp.over(this.socket);

  subscribe(topic: string, callback: any): void{

    const connected: boolean = this.stompClient.connected;
    
    console.log("WEBSOCKET TRY CONNECTION");

    if(connected){
      this.subscribeToTopic(topic, callback);
      return;
    }

    this.stompClient.connect({}, (): any => {
      this.subscribeToTopic(topic, callback);
    });

  }

  private subscribeToTopic(topic: string, callback: any): void{

    this.stompClient.subscribe(topic, (): any => {
      callback();
    });

  }

}
