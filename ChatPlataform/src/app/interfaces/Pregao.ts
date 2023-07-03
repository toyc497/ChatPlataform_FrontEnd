import { Sistemas } from "./Sistemas";

export interface Pregao{

    id: number;
    chaveEdital: string;
    numeroPregao: number;
    orgao: string;
    lote: number;
    sistema: Sistemas; 

}