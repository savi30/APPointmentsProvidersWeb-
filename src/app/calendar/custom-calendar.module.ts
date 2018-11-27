import {NgModule} from '@angular/core';
import {CalendarComponent} from './calendar/calendar.component';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {SharedModule} from '../shared/shared.module';
import {CalendarHeaderComponent} from './calendar/utlis/calendar-header/calendar-header.component';

@NgModule({
  declarations: [
    CalendarComponent,
    CalendarHeaderComponent
  ],
  imports: [
    SharedModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  exports: [CalendarComponent]
})
export class CustomCalendarModule {

}
