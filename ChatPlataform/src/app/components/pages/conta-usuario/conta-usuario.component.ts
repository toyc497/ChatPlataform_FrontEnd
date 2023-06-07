import { Component } from '@angular/core';
import { Credencial } from 'src/app/interfaces/Credencial';

@Component({
  selector: 'app-conta-usuario',
  templateUrl: './conta-usuario.component.html',
  styleUrls: ['./conta-usuario.component.css']
})
export class ContaUsuarioComponent {

  credencialSystem: Credencial = {
    id: 1,
    usuario: 'microtecnica',
    senha: 'micro2023',
    sistema: 1
  }; 

  ngOnInit(): void{

  }

}
