import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class WebsocketapiService {

  socket = new SockJS(environment.websocketUrl);

  constructor() { }

  nomeWS: String = "Matheus";

}
