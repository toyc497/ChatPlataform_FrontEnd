import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pregao } from 'src/app/interfaces/Pregao';
import { DataService } from 'src/app/services/DataService';
import { EditalapiService } from 'src/app/services/editalapi.service';

@Component({
  selector: 'app-edital-page',
  templateUrl: './edital-page.component.html',
  styleUrls: ['./edital-page.component.css']
})
export class EditalPageComponent {

  editaisSistema: any;

  constructor(private editalapi: EditalapiService, private dataService: DataService, private router: Router){}

  ngOnInit(): void{

    this.getAllEditaisSistem();

  }

  getAllEditaisSistem(): void{

    let idSistema: number = this.dataService.getIdSistema(); 

    this.editalapi.getAllEditaisBySistemaId(idSistema).subscribe(

      (findEditaisResponse) => {this.editaisSistema = findEditaisResponse, console.log(this.editaisSistema)}

    );

    //console.log(this.editaisSistema);

  }

  /*
  listPregoes: Pregao[] = [
    {id: 1, chaveEdital: 3599, numeroPregao: 35745678984, lote: 1, sistema:1},
    {id: 1, chaveEdital: 35995, numeroPregao: 35745678984, lote: 1, sistema:1},
    {id: 1, chaveEdital: 35995, numeroPregao: 35745678984, lote: 1, sistema:1},
    {id: 1, chaveEdital: 35995, numeroPregao: 35745678984, lote: 1, sistema:1}
  ];
  */

}
