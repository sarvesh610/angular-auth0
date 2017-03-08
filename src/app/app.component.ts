import { Component, OnInit, ViewChild } from '@angular/core';
import { Auth } from './services/auth/auth.service';
import { MenuService } from './services/menus/menu.service';
import { MenuItem } from './services/menus/menuitem';
import { SchoolsService } from './services/schools/schools.service';
import { School } from './services/schools/school.component';

import { MdMenuTrigger } from '@angular/material/menu';

import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SchoolsService, MenuService],

})
export class AppComponent implements OnInit{
  private menuitems : Array<MenuItem>;
  private observable : Observable<Array<School>>;
  private schools : Array<School>;
  constructor(private auth: Auth, private menus: MenuService, private schoolService: SchoolsService) {
  }

  ngOnInit(){
      this.getSchools();
      this.getMenu('Default');
  }

  getMenu(schoolName : string) {
    this.menus.getMenuItemForSchool(schoolName).then(data =>{
    this.menuitems = this.extractMenuData(data);
    console.log('asda '+this.menuitems[0].name);
    });
  }

  getSchools() {
    this.observable =  this.schoolService.getSchools();
    let subscription = this.observable.subscribe(
      data => {
        this.schools = this.extractData(data);
      }
    );
  }

  getMenuFor(schoolName: string){
    console.log(schoolName);
    this.getMenu(schoolName);
  }

  extractData(data): Array<School> {
    let schools = new Array<School>();
    for (var i = 0; i < data.length; i++) {
      schools.push(data[i].School);
    }
    return schools;
  };

  extractMenuData(data) : Array<MenuItem> {
    let m = Array<MenuItem>();
    for (var i = 0; i < data.length; i++) {
      m.push(data[i]);
    }
    console.log(m.length);
    return m;
  };

}
