import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

// Service
import { AgendaService } from 'src/app/services/agenda.service';

// Dialog
import { CreateScheduleComponent } from '../modal/create-schedule/create-schedule.component';
import { DeleteModalComponent } from '../modal/delete-modal/delete-modal.component';

// Model
import { Agenda } from 'src/app/model/agenda';

// Interface
import { ResponseDialog } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  constructor(
    public dialog: MatDialog,
    public agendaService: AgendaService
  ) {}

  openEdit( id:number ): void {
    const dialogRef = this.dialog.open(CreateScheduleComponent, {
      width: '500px',
    });

    const agenda = this.agendaService.getAgenda( id );
    
    dialogRef.componentInstance.agenda = new Agenda( agenda );
    dialogRef.componentInstance.nombreModal = "Editar evento";

    dialogRef.afterClosed().subscribe( ( response:ResponseDialog ) => {
      if ( response?.ok ) {
        this.agendaService.editAgenda( response.agenda );
      }
    });

  }

  openDelete( id:number ): void {
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe( ( response:ResponseDialog ) => {
      if (response?.ok){
        this.agendaService.deleteAgenda( id );
      }
    });

  }


}
