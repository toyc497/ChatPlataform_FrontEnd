import { Component } from '@angular/core';
import { Credencial } from 'src/app/interfaces/Credencial';
import { CredencialService } from 'src/app/services/CredencialService';
import { DataService } from 'src/app/services/DataService';

@Component({
  selector: 'app-conta-usuario',
  templateUrl: './conta-usuario.component.html',
  styleUrls: ['./conta-usuario.component.css']
})
export class ContaUsuarioComponent {

  usuarioSistema = "";

  senhaSistema = "";

  credencialAtual: Credencial = {id: 0, usuario: this.usuarioSistema, senha: this.senhaSistema, sistema: {id: 0, nome: "sistema"}};

  idSistema: number = 0;
  

  constructor(private credencialService: CredencialService, private dataService: DataService){}

  ngOnInit(): void{

    this.idSistema = this.dataService.getIdSistema();

    this.getCredenciaisSistema();

  }

  getCredenciaisSistema(): void{

    this.credencialService.findCrendencialByIdSistema(this.idSistema).subscribe(

      (credencialBD) => (this.credencialAtual = credencialBD)

    );

  }

  putCredendiaisSistema(): void{

    this.credencialAtual.usuario = this.usuarioSistema;
    this.credencialAtual.senha = this.senhaSistema;
    
    this.credencialService.updateCredencialSistema(this.credencialAtual).subscribe(
      (updateResponse) => {alert('Credenciais Atualizadas: '+updateResponse.usuario+" | "+updateResponse.senha)}
    );

  }

}
