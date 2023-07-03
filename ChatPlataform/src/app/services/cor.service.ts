import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Cor } from '../interfaces/Cor';

@Injectable({
  providedIn: 'root'
})
export class CorService {

  private url = environment.baseApiUrl+"/colorGroup";

  constructor(private httpClient:HttpClient) { }

  findAllColorGroups(): Observable<Cor[]>{

    const urlFindAllCores = this.url+"/getall";
    return this.httpClient.get<Cor[]>(urlFindAllCores);

  }

}
