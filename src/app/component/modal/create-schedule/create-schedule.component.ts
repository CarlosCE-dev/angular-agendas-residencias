import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Agenda } from 'src/app/model/agenda';

export interface ResponseDialog {
  ok: Boolean,
  agenda: Agenda
}

@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.component.html',
  styleUrls: ['./create-schedule.component.css']
})
export class CreateScheduleComponent {

  @Input() public agenda:Agenda;
  
  requerido:boolean = false;
  confirmar:boolean = false;

  constructor(
    public dialogRef: MatDialogRef<CreateScheduleComponent>,
  ) {}

  cancel(): void {
    this.dialogRef.close({ ok: this.confirmar, agenda: this.agenda });
  }

  saveData(): void {
    this.requerido = false;
    if ( this.agenda.validateModel() ){
      this.confirmar = true;
      this.dialogRef.close({ ok: this.confirmar, agenda: this.agenda });
    } else {
      this.requerido = true;
    }
  }
}
