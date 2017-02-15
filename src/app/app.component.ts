import { Component, OnInit } from '@angular/core';
import { Auth } from './services/auth/auth.service';
import { TestService } from './services/rest/test.service';
import { SchoolsService } from './services/schools/schools.service';
import { School } from './services/schools/school.component';

import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SchoolsService],

})
export class AppComponent implements OnInit{
  private observable: Observable<Array<School>>;
  private schools : Array<School>;
  constructor(private auth: Auth, private test: TestService, private schoolService: SchoolsService) {
  }

  ngOnInit(){
      this.getSchools();
  }

  getSchools() {
    this.observable =  this.schoolService.getSchools();
    let subscription = this.observable.subscribe(
      data => {
        this.schools = this.extractData(data);
      }
    );
  }

  extractData(data): Array<School> {
    let schools = new Array<School>();
    for (var i = 0; i < data.length; i++) {
      schools.push(data[i].School);
    }
    return schools;
  };

}
