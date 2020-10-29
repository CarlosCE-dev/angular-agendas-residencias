import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CreateScheduleComponent, ResponseDialog } from '../modal/create-schedule/create-schedule.component';

// Model
import { Agenda } from 'src/app/model/agenda';

// Services
import { AgendaService } from 'src/app/services/agenda.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  email: string;

  constructor(
    public dialog: MatDialog,
    private agendaService: AgendaService
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateScheduleComponent, {
      disableClose: true,
      width: '500px',
    });

    dialogRef.componentInstance.agenda = new Agenda();

    dialogRef.afterClosed().subscribe( ( response:ResponseDialog ) => {
      if ( response.ok ) {
        this.agendaService.addAgenda( response.agenda );
      }
    });
  }

}
