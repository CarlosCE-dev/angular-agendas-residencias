import { Component } from '@angular/core';

import * as moment from 'moment';

import { AgendaService } from 'src/app/services/agenda.service';

import { MatDialog } from '@angular/material/dialog';

import { CreateScheduleComponent, ResponseDialog } from '../modal/create-schedule/create-schedule.component';
import { DeleteModalComponent } from '../modal/delete-modal/delete-modal.component';

import { Agenda } from 'src/app/model/agenda';

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

  openEdit( id:Number ): void {
    const dialogRef = this.dialog.open(CreateScheduleComponent, {
      width: '500px',
    });

    const agenda = this.agendaService.getAgenda( id );
    // @ts-ignore
    agenda.fecha_inicio = moment( agenda.fecha_inicio ).format('YYYY-MM-DDTHH:MM');
    
    dialogRef.componentInstance.agenda = new Agenda( agenda );

    dialogRef.afterClosed().subscribe( ( response:ResponseDialog ) => {
      if ( response?.ok ) {
        this.agendaService.editAgenda( response.agenda );
      }
    });

  }

  openDelete( id:Number ): void {
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
