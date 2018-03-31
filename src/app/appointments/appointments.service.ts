import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Appointment } from './Appointment';
import { Observable, Subscription } from 'rxjs';
import 'rxjs/add/operator/map';
import { AuthService } from '../core/auth.service';
import { Provider } from '../core/Provider';

@Injectable()
export class AppointmentsService {

  private basePath = "/appointments";
  private user:Provider;
  private subscription:Subscription;

  private appointmentsCollection: AngularFirestoreCollection<Appointment>;
  private appointments : Observable<Appointment[]>;

  constructor(private db:AngularFirestore, private auth:AuthService) { 
    this.appointments = auth.user.switchMap((user)=>{
      if(user){
          this.appointmentsCollection = this.db.collection(this.basePath, ref =>{
            return ref.where("providerID","==",user.uid);
          });
          return this.appointments = this.appointmentsCollection.valueChanges();
      }else{
          return Observable.of(null);
      }
    })
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
