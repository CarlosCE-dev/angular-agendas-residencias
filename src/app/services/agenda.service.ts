import { Injectable } from '@angular/core';
import { Agenda } from '../model/agenda';
import { CalendarDate } from '../interfaces/interfaces';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor() {}

  public calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    events: []
  };

  public agendas:Agenda[] = [];

  getAgendas = () : Agenda[] => this.agendas;

  getAgenda = ( id:number ) => this.agendas.find( a => a.id === id );

  deleteAgenda( id:number) {
    this.agendas = this.agendas.filter( a => a.id !== id );
    this.removeCalendarDate( id );
  }

  loadAgenda( agendas:Agenda[] ){
    this.agendas = agendas;
    this.convertCalendarDates( agendas );
  }

  addAgenda( agenda:Agenda ): void {
    agenda.id = this.agendas.length + 1;
    this.convertCalendarDate( agenda );
    this.agendas.push( agenda );
  }

  editAgenda( agenda:Agenda ) {
    this.agendas = this.agendas.map( ( a ) => {
      if ( a.id === agenda.id ) {
        a = agenda;
      }
      return a;
    });
    this.editCalendarDate( agenda );
  }

  editCalendarDate( agenda:Agenda ) {
    const calendarDates: CalendarDate[] = [];

    // @ts-ignore
    calendarDates.push(...this.calendarOptions.events);

    // @ts-ignore
    this.calendarOptions.events = calendarDates.map( c => {
      if ( agenda.id === c.id ) {
        c.title = agenda.nombre;
        // @ts-ignore
        c.date = moment(agenda.fecha_inicio).format('YYYY-MM-DD')
      }
      return c;
    })
  }

  removeCalendarDate( id:number){
    const calendarDates: CalendarDate[] = [];

    // @ts-ignore
    calendarDates.push(...this.calendarOptions.events);
    
    // @ts-ignore
    this.calendarOptions.events = calendarDates.filter( c => c.id !== id );;
  }

  convertCalendarDate( agenda:Agenda ) {
    
    const calendarDates: CalendarDate[] = [];

    // @ts-ignore
    calendarDates.push(...this.calendarOptions.events);

    const calendarDate:CalendarDate = {
      id: agenda.id,
      title: agenda.nombre,
      // @ts-ignore
      date: moment(agenda.fecha_inicio).format('YYYY-MM-DD')
    }

    calendarDates.push( calendarDate );

    // @ts-ignore
    this.calendarOptions.events = calendarDates;
  }

  convertCalendarDates( agendas:Agenda[] ) {
    const calendarDates:CalendarDate[] = agendas.map( agenda => {
      const calendarDate:CalendarDate = {
        id: agenda.id,
        title: agenda.nombre,
        // @ts-ignore
        date: moment(agenda.fecha_inicio).format('YYYY-MM-DD')
      };
      return calendarDate;
    });

    // @ts-ignore
    this.calendarOptions.events = calendarDates;
  }
  
}
