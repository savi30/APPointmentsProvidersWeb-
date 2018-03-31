import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Appointment } from './Appointment';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class AppointmentsService {

  private basePath = "/appointments";
  
  private appointmentsCollection: AngularFirestoreCollection<Appointment>;
  private appointments : Observable<Appointment[]>;

  constructor(private db:AngularFirestore) { 
    this.appointmentsCollection = this.db.collection(this.basePath);
    this.appointments = this.appointmentsCollection.valueChanges();
  }

  getAppointmentsList(){
    return this.appointments;
  }

  getAppointment(id:string):Observable<Appointment | null>{
    const appointmentPath = `${this.basePath}/${id}`;
    const category = this.db.doc(appointmentPath).valueChanges() as Observable<Appointment | null>;
    return category;
  }

}
