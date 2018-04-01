import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  IsUserLoggedIn:boolean;
  hide = true;

  constructor(public auth: AuthenticationService) { }

  email = new FormControl('',[Validators.required, Validators.email])


  getErrorMessage(){
    return this.email.hasError('required') ? 'You must enter a value' : this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit() {
  }

}
