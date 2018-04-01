import { Component, OnInit } from '@angular/core';
import {FormControl,Validators} from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  termsAccepted=false;
  hide=true;
  email = new FormControl('', [Validators.required ,Validators.email]);

  constructor(public auth: AuthenticationService) {
;
  }

  ngOnInit() {
  }
  getErrorMessage(){
    return this.email.hasError('required') ? 'You must enter a value' : this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
