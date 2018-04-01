import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from '../dashboard/dashboard/dashboard.component';
import { ProfileComponent } from '../users/profile/profile.component';
import { AppointmentsListComponent } from '../appointments/appointments-list/appointments-list.component';

const homeRoutes:Routes = [
  {
    path:'home',
    component:HomeComponent,
    children:[
      {
        path:'', 
        component:DashboardComponent,
        children:[
          {
            path:'',
            component:AppointmentsListComponent
          }
        ]
      },
      {
        path:'profile',
        component:ProfileComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
