import {Component, OnInit} from '@angular/core';
import {AppointmentsService} from '../appointments.service';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css']
})
export class AppointmentsListComponent implements OnInit {
  appointments: String[];

  constructor(private appointmentsService: AppointmentsService) {
    this.appointments = appointmentsService.appointments;
  }

  ngOnInit() {
  }

}
