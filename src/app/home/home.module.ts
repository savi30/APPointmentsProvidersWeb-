import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {AppointmentsModule} from '../appointments/appointments.module';
import {CustomCalendarModule} from '../calendar/custom-calendar.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    AppointmentsModule,
    CustomCalendarModule
  ],
  exports: [
    AppointmentsModule,
    CustomCalendarModule
  ]
})
export class HomeModule {

}
