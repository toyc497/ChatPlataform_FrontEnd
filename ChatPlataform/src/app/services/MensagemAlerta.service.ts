import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { palavraChave } from '../interfaces/PalavraChave';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class MensagemAlertaService{

    private url = environment.baseApiUrl+"/palavraChave";

    constructor(private HttpClient:HttpClient){}

    getPalavrasChave(): Observable<palavraChave[]>{
        
        const urlFindAll = this.url+"/getall";
        return this.HttpClient.get<palavraChave[]>(urlFindAll);

    };

    savePalavraChave(palavra: palavraChave): Observable<any>{

        let urlSave = this.url+"/save";

        const palavraToSave = {
            palavra: palavra.palavra,
            beepName: palavra.beepName,
            idColorGroup: palavra.colorGroup.id
        };

        const headers = new HttpHeaders({"content-type": "application/json"});

        return this.HttpClient.post<palavraChave>(urlSave, palavraToSave, {headers});

    }

    deletePalavraChave(id: Number){

        let urlDelete = this.url+"/delete/"+id;
        return this.HttpClient.delete(urlDelete);

    }

}