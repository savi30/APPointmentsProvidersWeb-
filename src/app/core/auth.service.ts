import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth} from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { Provider } from './Provider';

@Injectable()
export class AuthService {

  user : Observable<Provider>;

  constructor(private auth:AngularFireAuth,
              private afs:AngularFirestore,
              private router:Router) { 
              
                this.user = this.auth.authState
                  .switchMap( user => {
                    if(user){
                      return this.afs.doc<Provider>(`users/${user.uid}`).valueChanges(); 
                    }else{
                      return Observable.of(null);
                    }
                  })

              }
  googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  signOut(){
    this.auth.auth.signOut();
  }

  emailLogin(email,password){
    return this.auth.auth.signInWithEmailAndPassword(email,password)
      .then(user=>{
        const data:Provider = this.makeUserResourceBundle(user);
        this.updateUserData(user,data);
      })
      .catch(error=>{
        console.log(error.code);
      })
  }

  registerWithEmail(email,password){
    return this.auth.auth.createUserWithEmailAndPassword(email,password)
      .then(user=>{
        const data:Provider=this.makeUserResourceBundle(user);
        this.updateUserData(user,data);
      })
      .catch(error=>{
        console.log(error);
      })
  }

  private oAuthLogin(provider){
    return this.auth.auth.signInWithPopup(provider)
      .then(credential =>{
        const user = credential.user;
        const data:Provider = this.makeUserResourceBundle(user);
        this.updateUserData(user,data);
      })
  }

  private makeUserResourceBundle(user):Provider{
    return {
      uid: user.uid,
      email: user.email,
      photoURL: user.photoURL,
      displayName: user.displayName
    }
  }

  private updateUserData(user,data){
    const userRef: AngularFirestoreDocument<Provider> = this.afs.doc(`users/${user.uid}`);
    userRef.set(data,{
      merge:true
    })
  }


}
