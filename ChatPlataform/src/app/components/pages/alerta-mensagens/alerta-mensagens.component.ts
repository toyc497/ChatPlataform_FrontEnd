import { Component } from '@angular/core';
import { palavraChave } from 'src/app/interfaces/PalavraChave';
import { Cor } from 'src/app/interfaces/Cor';

@Component({
  selector: 'app-alerta-mensagens',
  templateUrl: './alerta-mensagens.component.html',
  styleUrls: ['./alerta-mensagens.component.css']
})
export class AlertaMensagensComponent {

  palavraChaveTxt: String = "";

  palavraChaveList: palavraChave[] = [];

  corId: number = 0; 

  coresList: Cor[] = [
    {id: 1, nome: "Empresa", hexadecimalCor: "#FF0000"},
    {id: 2, nome: "Financeiro", hexadecimalCor: "#FFD700"},
    {id: 3, nome: "Verde", hexadecimalCor: "#3CB371"},
    {id: 4, nome: "Azul", hexadecimalCor: "#4169E1"}
  ];

  addBtnClick(): void{
    this.palavraChaveList.push({palavra: this.palavraChaveTxt, cor_id: this.corId});
  }

  deleteKeyword(wordKey: palavraChave): void{
    let indexPalavraList = this.palavraChaveList.indexOf(wordKey);
    this.palavraChaveList.splice(indexPalavraList,1);
  }

}
