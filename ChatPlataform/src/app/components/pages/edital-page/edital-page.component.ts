import { Component } from '@angular/core';
import { Pregao } from 'src/app/interfaces/Pregao';

@Component({
  selector: 'app-edital-page',
  templateUrl: './edital-page.component.html',
  styleUrls: ['./edital-page.component.css']
})
export class EditalPageComponent {

  listPregoes: Pregao[] = [
    {id: 1, chaveEdital: 35995, numeroPregao: 35745678984, lote: 1, sistema:1},
    {id: 1, chaveEdital: 35995, numeroPregao: 35745678984, lote: 1, sistema:1},
    {id: 1, chaveEdital: 35995, numeroPregao: 35745678984, lote: 1, sistema:1},
    {id: 1, chaveEdital: 35995, numeroPregao: 35745678984, lote: 1, sistema:1}
  ];

}
