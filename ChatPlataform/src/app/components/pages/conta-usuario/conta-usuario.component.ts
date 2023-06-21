import { Component } from '@angular/core';
import { Credencial } from 'src/app/interfaces/Credencial';
import { Sistemas } from 'src/app/interfaces/Sistemas';
import { CredencialService } from 'src/app/services/CredencialService';
import { DataService } from 'src/app/services/DataService';

@Component({
  selector: 'app-conta-usuario',
  templateUrl: './conta-usuario.component.html',
  styleUrls: ['./conta-usuario.component.css']
})
export class ContaUsuarioComponent {

  credencialAtual: Credencial[] = [];

  testeReturn: string = '';

  sistemaAtual!: number;
  

  constructor(private credencialService: CredencialService, private dataService: DataService){}

  ngOnInit(): void{

    this.sistemaAtual = this.dataService.getIdSistema();
    console.log("SISTEMA ATUAL: "+this.sistemaAtual);

    this.credencialService.findCrendencialByIdSistema(this.sistemaAtual).subscribe(
      //(credencialDB) => console.log(credencialDB)
      (credencialBD) => (this.testeReturn = credencialBD)
      //(credencialBD) => (this.testeReturn = credencialBD)
    );

    

    console.log("CREDENCIAL ATUAL: "+this.testeReturn);

  }

}
