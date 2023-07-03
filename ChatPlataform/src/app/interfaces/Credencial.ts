import { Sistemas } from "./Sistemas";

export interface Credencial{

    id: number;
    usuario: string;
    senha: string;
    sistema: Sistemas;

}