import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TopNavComponent } from '../ui/top-nav/top-nav.component';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from '../dashboard/dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    DashboardComponent,
    TopNavComponent
  ]
})
export class HomeModule { }
