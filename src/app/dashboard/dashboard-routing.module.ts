import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { AppointmentsListComponent } from '../appointments/appointments-list/appointments-list.component';

const dashboardRoutes:Routes =[
  {path:'appointments',component:AppointmentsListComponent}
] 

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
