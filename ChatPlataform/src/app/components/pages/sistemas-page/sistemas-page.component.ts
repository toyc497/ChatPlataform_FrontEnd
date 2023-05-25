import { Component } from '@angular/core';

import { Sistemas } from 'src/app/interfaces/sistemas';

@Component({
  selector: 'app-sistemas-page',
  templateUrl: './sistemas-page.component.html',
  styleUrls: ['./sistemas-page.component.css']
})
export class SistemasPageComponent {

  sistemasChat: Sistemas[] = [
    {id: 1, nome: "BBMNET"},
    {id: 2, nome: "PNCP"},
    {id: 3, nome: "BRASILNET"}
  ];

}
