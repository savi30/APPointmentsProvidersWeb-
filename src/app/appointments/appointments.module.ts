import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AppointmentDetailComponent } from './appointment-detail/appointment-detail.component';
import { AppointmentsListComponent } from './appointments-list/appointments-list.component';
import { AppointmentsService } from './appointments.service';
import { LoadingSpinnerComponent } from '../ui/loading-spinner/loading-spinner.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    AppointmentDetailComponent,
    AppointmentsListComponent,
    LoadingSpinnerComponent
  ],
  providers:[
    AppointmentsService
  ],
  exports:[
    AppointmentDetailComponent,
    AppointmentsListComponent
  ]
})
export class AppointmentsModule { }
