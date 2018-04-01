import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationHomeComponent } from './authentication-home/authentication-home.component';

const authRoutes:Routes = [
  {
    path:'auth',
    component:AuthenticationHomeComponent,
    children:[
      {
        path:'login', 
        component:LoginComponent
      },
      {
        path:'register',
        component:RegisterComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes)
  ],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
