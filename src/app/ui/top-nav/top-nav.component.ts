import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit() {
  }

}
