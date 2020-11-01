import { Component } from '@angular/core';

// Service
import { AgendaService } from 'src/app/services/agenda.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent  {

  constructor(
    public agendaService: AgendaService
  ) {}

}
