import { Agenda } from '../model/agenda';

export interface CalendarDate {
    title: string;
    date: string;
    id: number;
}

export interface ResponseDialog {
    ok: Boolean,
    agenda: Agenda
  }