import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide=true;
  
  email = new FormControl('',[Validators.required,Validators.email])

  constructor(public auth:AuthService) { }

  ngOnInit() {
  }

  getErrorMessage(){
    return this.email.hasError('required') ? 'You must enter a value' : this.email.hasError('email') ? 'Not a valid email' : '';
  }



}
