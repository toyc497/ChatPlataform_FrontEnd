import { Injectable } from "@angular/core";
import { Sistemas } from "../interfaces/Sistemas";

@Injectable({
    providedIn: 'root'
})

export class DataService{

    private sistema!: Sistemas;

    constructor(){}

    setSistema(sistema: Sistemas){
        this.sistema = sistema;
    }

    getSistema(){
        return this.sistema;
    }

    getIdSistema(){
        return this.sistema.id;
    }

}