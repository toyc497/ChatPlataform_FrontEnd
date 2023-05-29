import { Component } from '@angular/core';
import { palavraChave } from 'src/app/interfaces/PalavraChave';
import { Cor } from 'src/app/interfaces/Cor';
import { MensagemAlertaService } from 'src/app/services/MensagemAlerta.service';

@Component({
  selector: 'app-alerta-mensagens',
  templateUrl: './alerta-mensagens.component.html',
  styleUrls: ['./alerta-mensagens.component.css']
})
export class AlertaMensagensComponent {

  palavraChaveTxt: string = "";

  palavraChaveList: palavraChave[] = [];

  corId: number = 0; 

  constructor(private mensagemAlertaService: MensagemAlertaService){}

  coresList: Cor[] = [
    {id: 1, nome: "Empresa", hexadecimalCode: "#FF0000"},
    {id: 2, nome: "Financeiro", hexadecimalCode: "#FFD700"},
    {id: 3, nome: "Verde", hexadecimalCode: "#3CB371"},
    {id: 4, nome: "Azul", hexadecimalCode: "#4169E1"}
  ];

  ngOnInit(): void{
    this.mensagemAlertaService.getPalavrasChave().subscribe(
      (palavra) => (this.palavraChaveList = palavra)
    ); 
  }

  corListFind = this.coresList[this.corId];

  addBtnClick(): void{
    
    let palavraAux = {id:0 ,palavra: this.palavraChaveTxt, beepName: "bells", colorGroup: this.coresList[this.corId-1]};
    
    this.mensagemAlertaService.savePalavraChave(palavraAux).subscribe();

    this.palavraChaveList.push(palavraAux);
    
  }

  deleteKeyword(wordKey: palavraChave): void{

    const idDelete = wordKey.id;
    this.mensagemAlertaService.deletePalavraChave(idDelete).subscribe();

    let indexPalavraList = this.palavraChaveList.indexOf(wordKey);
    this.palavraChaveList.splice(indexPalavraList,1);

  }

}
