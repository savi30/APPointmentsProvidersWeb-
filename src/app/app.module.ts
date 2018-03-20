import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { TopNavComponent } from './ui/top-nav/top-nav.component';
import { AuthService } from './core/auth.service';
import { CoreModule } from './core/core.module';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment.prod';
import { DashboardComponent } from './ui/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule,
    MaterialModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
