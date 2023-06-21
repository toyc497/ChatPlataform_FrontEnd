import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { environment } from "../environments/environment";
import { Observable } from "rxjs";
import { Credencial } from "../interfaces/Credencial";

@Injectable({
    providedIn: 'root'
})

export class CredencialService{

    private url = environment.baseApiUrl+"/credenciais";

    constructor(private HttpClient:HttpClient){}

    findCrendencialByIdSistema(idSistema: number): Observable<string>{

        let urlFindByIdSistema = this.url+"/getbyidsistema"+"/"+idSistema;

        console.log("URL: "+urlFindByIdSistema);

        return this.HttpClient.get<string>(urlFindByIdSistema);

    }

}