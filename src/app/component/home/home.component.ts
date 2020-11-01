import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateScheduleComponent } from '../modal/create-schedule/create-schedule.component';

// Model
import { Agenda } from 'src/app/model/agenda';

// Services
import { AgendaService } from 'src/app/services/agenda.service';

// Interface
import { ResponseDialog } from 'src/app/interfaces/interfaces';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  email: string;

  constructor(
    public dialog: MatDialog,
    private agendaService: AgendaService,
    private apiService: ApiService
  ) {}

  async ngOnInit(){
    const agendas = await this.apiService.getAgendasFromApi();
    this.agendaService.loadAgenda( agendas );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateScheduleComponent, {
      width: '500px',
    });

    dialogRef.componentInstance.agenda = new Agenda();

    dialogRef.afterClosed().subscribe( async ( response:ResponseDialog ) => {
      if ( response?.ok ) {
        const agenda = await this.apiService.addAgendaToApi( response.agenda );
        this.agendaService.addAgenda( agenda );
      }
    });
  }

}
