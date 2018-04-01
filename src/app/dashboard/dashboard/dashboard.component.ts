import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
  }

  ngOnInit(){

  }

}
