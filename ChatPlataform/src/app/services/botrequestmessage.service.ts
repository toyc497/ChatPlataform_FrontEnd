import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BotrequestmessageService {

  private urlAPI = environment.baseApiUrl+"/bot";

  constructor(private httpClient: HttpClient) { }

  getRequestBot(idEdital: number): Observable<string>{

    let url = this.urlAPI+"/request/"+idEdital;
    return this.httpClient.get<string>(url);

  }

}
