import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';

const routes:Routes = [
  { path:'', redirectTo:'/home',pathMatch:'full'},
  { path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{
      enableTracing:true
    })
  ],
  exports: [ RouterModule], 
  declarations: []
})
export class AppRoutingModule { }
