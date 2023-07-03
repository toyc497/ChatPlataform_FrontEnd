import { Component } from '@angular/core';
import { palavraChave } from 'src/app/interfaces/PalavraChave';
import { Cor } from 'src/app/interfaces/Cor';
import { MensagemAlertaService } from 'src/app/services/MensagemAlerta.service';
import { CorService } from 'src/app/services/cor.service';

@Component({
  selector: 'app-alerta-mensagens',
  templateUrl: './alerta-mensagens.component.html',
  styleUrls: ['./alerta-mensagens.component.css']
})
export class AlertaMensagensComponent {

  palavraChaveTxt: string = "";

  palavraChaveList: palavraChave[] = [];

  coresList: Cor[] = [];

  corId: Cor = {"id":0,"nome":"","hexadecimalCode":""}; 

  constructor(private mensagemAlertaService: MensagemAlertaService, private corService: CorService){}

  ngOnInit(): void{

    this.getAllcolors();
    
    this.getAllPalavrasChave();

  }

  getAllPalavrasChave(): void{

    this.mensagemAlertaService.getPalavrasChave().subscribe(
      (palavra) => (this.palavraChaveList = palavra)
    ); 

  }

  getAllcolors(): void{

    this.corService.findAllColorGroups().subscribe(
      (colorsGroups) => {this.coresList = colorsGroups}
    );

  }

  addBtnClick(): void{
    
    let palavraAux = {id:0 ,palavra: this.palavraChaveTxt, beepName: "bells", colorGroup: this.corId};

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
