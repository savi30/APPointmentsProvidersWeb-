import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './ui/dashboard/dashboard.component';
import { LoginComponent } from './users/login/login.component';
import { AuthGuard } from './core/auth.guard';
import { AppointmentsListComponent } from './appointments/appointments-list/appointments-list.component';
import { PendingRequestsComponent } from './appointments/pending-requests/pending-requests.component';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';

const routes:Routes = [
  { path:'', component:DashboardComponent, canActivate:[AuthGuard]},
  { path:'dashboard', redirectTo:'', canActivate:[AuthGuard]},
  { path:'login', component:LoginComponent, pathMatch:'full'},
  { path:'pending', component:PendingRequestsComponent, pathMatch:'full', canActivate:[AuthGuard]},
  { path:"**", component:PageNotFoundComponent}
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
