import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pregao } from 'src/app/interfaces/Pregao';
import { DataService } from 'src/app/services/DataService';
import { ChatmessagesdataService } from 'src/app/services/chatmessagesdata.service';
import { EditalapiService } from 'src/app/services/editalapi.service';

@Component({
  selector: 'app-edital-page',
  templateUrl: './edital-page.component.html',
  styleUrls: ['./edital-page.component.css']
})
export class EditalPageComponent {

  editaisSistema: Pregao[] = [];

  idSistema: number = 0;

  constructor(private editalapi: EditalapiService, private dataService: DataService, private chatmessagesdataService: ChatmessagesdataService, private router: Router){}

  ngOnInit(): void{

    this.idSistema = this.dataService.getIdSistema();

    this.getAllEditaisSistem();

  }

  getAllEditaisSistem(): void{

    this.editalapi.getAllEditaisBySistemaId(this.idSistema).subscribe(

      (findEditaisResponse) => {this.editaisSistema = findEditaisResponse}

    );

  }

  pregaoClicked(pregao: Pregao): void{

    this.dataService.setEdital(pregao);
    this.chatmessagesdataService.setListaMensagens();
    this.router.navigateByUrl('/chat');

  }

}
