import { Component, OnInit } from '@angular/core';
import { Auth } from '../../services/auth/auth.service'
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth: Auth) {
    console.log(environment.authZeroClientID);
  }

  ngOnInit() {
  }

}
