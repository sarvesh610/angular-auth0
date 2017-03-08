import { Injectable } from '@angular/core';
import { MenuItem } from './menuitem';

@Injectable()
export class MenuService {
  private MenuItemItems : Array<MenuItem>;
  private al : Array<MenuItem>;
  constructor() {
  }

  getMenuItemForSchool(name: string) : Promise<MenuItem[]> {
    console.log("Called ---")
    switch(name) {
      case 'Burnet Hill Elementary School' :
        return Promise.resolve(this.mockBurnetSchoolMenuItem());
      case 'Collins Elementary School':
        return Promise.resolve(this.mockCollinsSchoolMenuItem());
      default :
        console.log("default called");
        return Promise.resolve(this.mockDefaultMenuItem());
    }
  }
  mockBurnetSchoolMenuItem(): Array<MenuItem> {
      let al = new Array<MenuItem>();
      al.push(new MenuItem(" ","Burnet Link 1"));
      al.push(new MenuItem(" ","Burnet Link 2"));
      al.push(new MenuItem(" ","Burnet Link 3"));
      al.push(new MenuItem(" ","Burnet Link 4"));
      al.push(new MenuItem(" ","Burnet Link 5"));
      al.push(new MenuItem(" ","Burnet Link 6"));
      return al;
    }

    mockCollinsSchoolMenuItem(): Array<MenuItem> {
      let al = new Array<MenuItem>();
      al.push(new MenuItem(" ","Collins Link 1"));
      al.push(new MenuItem(" ","Collins Link 2"));
      al.push(new MenuItem(" ","Collins Link 3"));
      al.push(new MenuItem(" ","Collins Link 4"));
      al.push(new MenuItem(" ","Collins Link 5"));
      al.push(new MenuItem(" ","Collins Link 6"));
      return al;
    }

    mockDefaultMenuItem(): Array<MenuItem> {
      let al = new Array<MenuItem>();
      al.push(new MenuItem(" ","Default Link 1"));
      al.push(new MenuItem(" ","Default Link 2"));
      al.push(new MenuItem(" ","Default Link 3"));
      al.push(new MenuItem(" ","Default Link 4"));
      al.push(new MenuItem(" ","Default Link 5"));
      al.push(new MenuItem(" ","Default Link 6"));
      return al;
    }





}
