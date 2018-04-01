import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationHomeComponent } from './authentication-home/authentication-home.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationService } from './authentication.service';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthenticationHomeComponent
  ],
  providers:[AuthenticationService]
})
export class AuthenticationModule { }
