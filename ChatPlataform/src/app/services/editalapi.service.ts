import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Pregao } from '../interfaces/Pregao';

@Injectable({
  providedIn: 'root'
})

export class EditalapiService {

  private url = environment.baseApiUrl+"/sistema";

  constructor(private HttpClient:HttpClient) { }

  getAllEditaisBySistemaId(id: number): Observable<any>{

    const urlFinAllEditais = this.url+"/editais/"+id;
    console.log("URL: "+urlFinAllEditais);

    return this.HttpClient.get(urlFinAllEditais);

  }

}
