import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class TestService {
  constructor(private http: Http){
    console.log('instantiating PostsService');
  }

  getTest(){
    console.log('called');
    var headers = new Headers();
    headers.append("Content-Type", 'application/json');
    return this.http.get(
      environment.testUrl,
      {
        headers:headers
      }
    ).map(res => res.json());
  }

}
