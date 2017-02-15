import { Component, OnInit } from '@angular/core';
import { Auth } from '../../services/auth/auth.service'
import { TestService } from '../../services/rest/test.service'
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth: Auth, private test: TestService) {
  }

  ngOnInit() {
    console.log("inside init");
    this.loadTest();
  }

  loadTest() {
    this.test.getTest().subscribe((res) => {
    console.log(res);
    });
  }

}
