import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Appointment } from '..//Appointment';
import { Subscription } from 'rxjs';
import { AppointmentsService } from '..//appointments.service';

@Component({
  selector: 'app-pending-requests',
  templateUrl: './pending-requests.component.html',
  styleUrls: ['./pending-requests.component.css']
})
export class PendingRequestsComponent implements OnInit {

  appointments:Observable<Appointment[]>;
  isListLoading=true;
  subscription:Subscription;

  constructor(private appointmentsService:AppointmentsService) {
    this.appointments = this.appointmentsService.getAppointmentsList("pending");
    this.subscription = this.appointments.subscribe(()=>{
      this.isListLoading = false;
    });
   }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
