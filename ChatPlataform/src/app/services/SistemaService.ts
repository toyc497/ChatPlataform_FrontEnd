import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Sistemas } from '../interfaces/Sistemas';

@Injectable({
    providedIn: 'root'
})

export class SistemaService{

    private url = environment.baseApiUrl+"/sistema";

    constructor(private HttpClient:HttpClient){}

    getAllSistemas(): Observable<Sistemas[]>{

        const urlFindAll = this.url+"/getall";
        return this.HttpClient.get<Sistemas[]>(urlFindAll);

    }

    deleteSistema(id: number){
        let urlDelete = this.url+"/delete/"+id;
        return this.HttpClient.delete(urlDelete);
    }

}