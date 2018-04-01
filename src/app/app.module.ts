import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { Form, FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment.prod';
import { AppointmentsModule } from './appointments/appointments.module';
import { ProfileComponent } from './users/profile/profile.component';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { HomeModule } from './home/home.module';
import { DashboardModule } from './dashboard/dashboard.module';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AuthenticationModule,
    HomeModule,
    DashboardModule,
    AppointmentsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
