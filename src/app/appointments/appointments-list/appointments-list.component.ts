import { Component, OnInit } from '@angular/core';
import { Appointment } from '../Appointment';
import { Observable, Subscription } from 'rxjs';
import { AppointmentsService } from '../appointments.service';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css']
})
export class AppointmentsListComponent implements OnInit {

  appointments:Observable<Appointment[]>;
  isListLoading=true;
  subscription:Subscription;

  constructor(private appointmentsService:AppointmentsService) {
    this.appointments = this.appointmentsService.getAppointmentsList()
    this.subscription = this.appointmentsService.getAppointmentsList().subscribe(()=>{
      this.isListLoading = false;
    });
   }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  getAppointmentList() {
    this.appointments = this.appointmentsService.getAppointmentsList();
  }

}
