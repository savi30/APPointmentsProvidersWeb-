import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-appointments-detail',
  templateUrl: './appointments-detail.component.html',
  styleUrls: ['./appointments-detail.component.css']
})
export class AppointmentsDetailComponent implements OnInit {

  @Input()
  appointment: string;

  constructor() {
  }

  ngOnInit() {
  }

}
