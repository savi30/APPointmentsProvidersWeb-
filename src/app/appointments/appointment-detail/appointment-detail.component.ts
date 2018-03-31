import { Component, OnInit, Input } from '@angular/core';
import { Appointment } from '../Appointment';
import { AppointmentsService } from '../appointments.service';

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

}
