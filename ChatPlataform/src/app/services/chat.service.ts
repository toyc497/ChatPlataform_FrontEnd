import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Mensagem } from '../interfaces/Mensagem';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private url = environment.baseApiUrl+"/edital/mensagens/";

  constructor(private httpClient:HttpClient) { }

  getAllMessagesByEditalId(id: number): Observable<Mensagem[]>{

    const urlFindAllMessages = this.url+id;

    return this.httpClient.get<Mensagem[]>(urlFindAllMessages);

  }

}
