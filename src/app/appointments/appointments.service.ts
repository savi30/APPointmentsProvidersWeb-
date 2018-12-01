import {Injectable} from '@angular/core';

@Injectable()
export class AppointmentsService {
  // TODO make custom classes for appointments
  appointments: String[] = [
    'APP1',
    'APP2',
    'APP3'
  ];

  constructor() {
  }

}
