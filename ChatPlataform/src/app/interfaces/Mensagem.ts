import { Pregao } from "./Pregao";

export interface Mensagem{

    id: number;
    origem: string;
    dataHora: string;
    conteudo: String;
    edital: Pregao;

}