import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Agenda } from 'src/app/model/agenda';
import { AgendaService } from 'src/app/services/agenda.service';

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
  @Input() nombreModal:string = "Crear evento";
  
  requerido:boolean = false;
  confirmar:boolean = false;
  msgError:string = "";

  constructor(
    public dialogRef: MatDialogRef<CreateScheduleComponent>,
    public agendaService: AgendaService
  ) {}

  cancel(): void {
    this.dialogRef.close({ ok: this.confirmar, agenda: this.agenda });
  }

  saveData(): void {
    this.requerido = false;

    if (!this.agenda.validateModel() ){
      this.msgError = "Es requerido rellenar todos los campos.";
      this.requerido = true;
      return;
    }

    if (!this.agenda.fecha){
      this.msgError = "Ocurrio un errror. Porfavor selecciona una fecha valida. Pulsa el icono para asignar una fecha.";
      this.requerido = true;
      return;
    }
  
    if (this.agendaService.checkDate( this.agenda.fecha, this.agenda.id )) {
      this.msgError = "Es día que seleccionaste ya esta ocupado.";
      this.requerido = true;
      return;
    } 

    this.confirmar = true;
    this.dialogRef.close({ ok: this.confirmar, agenda: this.agenda });
  }
}
