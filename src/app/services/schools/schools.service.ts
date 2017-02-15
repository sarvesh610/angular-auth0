import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';
import { School } from './school.component'

@Injectable()
export class SchoolsService {
  constructor(private http: Http) {
    console.log('instantiating School Service');
  }

  getSchools() {
    var headers = new Headers();
    headers.append("Content-Type", 'application/json');
    return this.http.get(
      environment.schoolsUrl,
      {
        headers:headers
      }
    ).map(res => res.json());
  };


}
