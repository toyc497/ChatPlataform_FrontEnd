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

    findCrendencialByIdSistema(idSistema: number): Observable<Credencial>{

        let urlFindByIdSistema = this.url+"/getbyidsistema"+"/"+idSistema;

        return this.HttpClient.get<Credencial>(urlFindByIdSistema);

    }

    updateCredencialSistema(credencial: Credencial): Observable<Credencial>{

        const credencialToUpdate = {id: credencial.id, usuario: credencial.usuario, senha: credencial.senha};
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        let urlUpdate = this.url+"/update";
        return this.HttpClient.put<Credencial>(urlUpdate,credencialToUpdate,{headers});

    }

}