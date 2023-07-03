import { Injectable } from "@angular/core";
import { Sistemas } from "../interfaces/Sistemas";
import { Pregao } from "../interfaces/Pregao";

@Injectable({
    providedIn: 'root'
})

export class DataService{

    private sistema!: Sistemas;

    private edital!: Pregao

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

    setEdital(pregao: Pregao){
        this.edital = pregao;
    }

    getEdital(){
        return this.edital;
    }

    getIdEdital(){
        return this.edital.id;
    }

}