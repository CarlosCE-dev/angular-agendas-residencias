import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateScheduleComponent } from '../modal/create-schedule/create-schedule.component';

// Model
import { Agenda } from 'src/app/model/agenda';

// Services
import { AgendaService } from 'src/app/services/agenda.service';

// Interface
import { ResponseDialog } from 'src/app/interfaces/interfaces';

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
  ) {}

  ngOnInit(){

    // Nueva agenda
    const agenda = new Agenda();
    agenda.nombre = "Cumpleaños Mario";
    agenda.persona = "Carlos Esteban Corral";
    agenda.telefono = "6291017687";
    agenda.correo = "test@test.com"
    agenda.status = true;

    this.agendaService.addAgenda( agenda );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateScheduleComponent, {
      width: '500px',
    });

    dialogRef.componentInstance.agenda = new Agenda();

    dialogRef.afterClosed().subscribe( ( response:ResponseDialog ) => {
      if ( response?.ok ) {
        this.agendaService.addAgenda( response.agenda );
      }
    });
  }

}
