import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable, Subscription } from 'rxjs';
import 'rxjs/add/operator/map';
import { Provider } from '../core/Provider';
import { filter } from 'rxjs/operator/filter';
import { merge } from 'rxjs/operator/merge';
import { Appointment } from '../core/Appointment';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class AppointmentsService {

  private basePath = "/appointments";

  private appointmentsCollection: AngularFirestoreCollection<Appointment>;
  private appointments : Observable<Appointment[]>;
  private filteredAppointments: Observable<Appointment[]>;

  constructor(private db:AngularFirestore, private auth:AuthenticationService) { 
  }

  getAppointmentsList(query:string = null):Observable<Appointment[]>{
    return this.auth.user.switchMap((user)=>{
      if(user){
          this.appointmentsCollection = this.db.collection(this.basePath, ref =>{
            if(query){
              return ref.where("providerID","==",user.uid).where("status","==",query);
            }
            return ref.where("providerID","==",user.uid);
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

  acceptAppointment(id:string){
    const docRef: AngularFirestoreDocument<any> = this.db.doc(`appointments/${id}`);
    docRef.set({status:"confirmed"},{
        merge:true
      });
  }

  rejectAppointment(){

  }

}
