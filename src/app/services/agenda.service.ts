import { Injectable } from '@angular/core';
import { Agenda } from '../model/agenda';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor() {
    const agenda = new Agenda();
    agenda.nombre = "Cumpleaños Mario";
    agenda.persona = "Carlos Esteban Corral";
    agenda.telefono = "6291017687";
    agenda.correo = "test@test.com"
    agenda.status = true;

    this.addAgenda( agenda );
  }

  public agendas:Agenda[] = [];

  getAgendas = () : Agenda[] => this.agendas;

  getAgenda = ( id:Number ) => this.agendas.find( a => a.id === id );

  deleteAgenda( id:Number) {
    this.agendas = this.agendas.filter( a => a.id !== id );
  }

  addAgenda( agenda:Agenda ): void {
    agenda.id = this.agendas.length + 1;
    this.agendas.push( agenda );
  }

  editAgenda( agenda:Agenda) {
    this.agendas = this.agendas.map( ( a ) => {
      if ( a.id === agenda.id ) {
        agenda = agenda;
      }
      return agenda;
    });
  }
  
}
