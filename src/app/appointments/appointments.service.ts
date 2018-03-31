import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Appointment } from './Appointment';
import { Observable, Subscription } from 'rxjs';
import 'rxjs/add/operator/map';
import { AuthService } from '../core/auth.service';
import { Provider } from '../core/Provider';
import { filter } from 'rxjs/operator/filter';

@Injectable()
export class AppointmentsService {

  private basePath = "/appointments";
  private user:Provider;
  private subscription:Subscription;

  private appointmentsCollection: AngularFirestoreCollection<Appointment>;
  private appointments : Observable<Appointment[]>;
  private filteredAppointments: Observable<Appointment[]>;

  constructor(private db:AngularFirestore, private auth:AuthService) { 
  }

  getAppointmentsList(query:string):Observable<Appointment[]>{
    return this.auth.user.switchMap((user)=>{
      if(user){
          this.appointmentsCollection = this.db.collection(this.basePath, ref =>{
            return ref.where("providerID","==",user.uid).where("status","==",query);
          });
          return this.appointmentsCollection.valueChanges();
      }else{
          return Observable.of(null);
      }
    })
  }
  getAppointment(id:string):Observable<Appointment | null>{
    const appointmentPath = `${this.basePath}/${id}`;
    const category = this.db.doc(appointmentPath).valueChanges() as Observable<Appointment | null>;
    return category;
  }

}
