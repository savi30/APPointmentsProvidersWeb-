import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './ui/dashboard/dashboard.component';

const routes:Routes = [
  { path:'', component:DashboardComponent } 
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule], 
  declarations: []
})
export class AppRoutingModule { }
