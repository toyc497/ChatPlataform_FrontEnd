import { Injectable } from '@angular/core';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';


@Injectable({
  providedIn: 'root'
})

export class WebsocketchatconnectService {

  socket = new SockJS('http://127.0.0.1:8085/connectiongate');
  stompClient = Stomp.over(this.socket);

  subscribe(topic: string, callback: any): void{

    const connected: boolean = this.stompClient.connected;
    
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
