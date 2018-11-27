import {NgModule} from '@angular/core';
import {AppointmentsDetailComponent} from './appointments-detail/appointments-detail.component';
import {AppointmentsListComponent} from './appointments-list/appointments-list.component';
import {AppointmentsService} from './appointments.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    AppointmentsDetailComponent,
    AppointmentsListComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [AppointmentsService],
  exports: [
    AppointmentsDetailComponent,
    AppointmentsListComponent
  ]
})
export class AppointmentsModule {
}
