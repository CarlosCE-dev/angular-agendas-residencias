import { Injectable } from '@angular/core';

// Dependencies
import * as moment from 'moment';
import esLocale from '@fullcalendar/core/locales/es';
import { CalendarOptions } from '@fullcalendar/angular';

// Interface
import { CalendarDate } from '../interfaces/interfaces';

// Model
import { Agenda } from '../model/agenda';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor() {}

  public calendarOptions: CalendarOptions = {
    locale: esLocale,
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
        c.date = moment(agenda.fecha).format('YYYY-MM-DD')
      }
      return c;
    })
  }

  checkDate( checkDate:Date, id:number ){
    
    for ( const agenda of this.agendas ){

      if ( agenda.id === id ) {
        return false;
      }

      const sameDay = (d1:Date, d2:Date ) => {
        return d1.getFullYear() === d2.getFullYear() &&
          d1.getMonth() === d2.getMonth() &&
          d1.getDate() === d2.getDate();
      }
  
      const exactDay = sameDay( agenda.fecha, checkDate );

      if ( exactDay ) {
        return true;
      }
    }
    
    return false;
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
      date: moment(agenda.fecha).format('YYYY-MM-DD')
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
        date: moment(agenda.fecha).format('YYYY-MM-DD')
      };
      return calendarDate;
    });

    // @ts-ignore
    this.calendarOptions.events = calendarDates;
  }
  
}
