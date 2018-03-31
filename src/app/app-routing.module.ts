import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './ui/dashboard/dashboard.component';
import { LoginComponent } from './users/login/login.component';
import { AuthGuard } from './core/auth.guard';

const routes:Routes = [
  { path:'', component:DashboardComponent, canActivate:[AuthGuard]},
  { path:'login', component:LoginComponent, pathMatch:'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers:[AuthGuard],
  exports: [ RouterModule], 
  declarations: []
})
export class AppRoutingModule { }
