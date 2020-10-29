import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

// Plugins
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin

// Components
import { NavbarComponent } from './component/ui/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { TableComponent } from './component/table/table.component';
import { CalendarComponent } from './component/calendar/calendar.component';

// Material module
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Pipes
import { DatePipe } from './pipes/date.pipe';

// Modals
import { CreateScheduleComponent } from './component/modal/create-schedule/create-schedule.component';
import { DeleteModalComponent } from './component/modal/delete-modal/delete-modal.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
]);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TableComponent,
    CreateScheduleComponent,
    DeleteModalComponent,
    DatePipe,
    CalendarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgbModule,
    MaterialModule,
    BrowserAnimationsModule,
    FullCalendarModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CreateScheduleComponent]
})
export class AppModule { }
