import { Component, OnInit, Input } from '@angular/core';
import { AppointmentsService } from '../appointments.service';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
import { Appointment } from '../../core/Appointment';

@Component({
  selector: 'app-appointment-detail',
  templateUrl: './appointment-detail.component.html',
  styleUrls: ['./appointment-detail.component.css']
})
export class AppointmentDetailComponent implements OnInit {

  @Input() appointment:Appointment;

  constructor(public appointmentsService:AppointmentsService ) { }

  ngOnInit() {
  }

  acceptAppointment(){
    this.appointmentsService.acceptAppointment(this.appointment.appointmentID);
  }

  rejectAppointment(){
    this.appointmentsService.rejectAppointment();
  }

}
