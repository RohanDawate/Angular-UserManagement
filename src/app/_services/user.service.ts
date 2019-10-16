import { Injectable } from '@angular/core';
import { User } from '../_model/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  listusers: User[] = [
      { id: 1, firstname: 'A A', lastname: 'A', email: 'a1@a.com' },
      { id: 2, firstname: 'B B', lastname: 'B', email: 'b1@a.com' },
      { id: 3, firstname: 'C C', lastname: 'C', email: 'c1@a.com' },
      { id: 4, firstname: 'D D', lastname: 'D', email: 'd1@a.com' },
      { id: 5, firstname: 'E E', lastname: 'E', email: 'e1@a.com' },
      { id: 6, firstname: 'F F', lastname: 'F', email: 'f1@a.com' },
      { id: 7, firstname: 'G G', lastname: 'G', email: 'g1@a.com' }
    ];

  constructor() { }

  getUsersFromService() {
    return this.listusers;
  }

  addUserFromService(u: User) {
    // tslint:disable-next-line: only-arrow-functions
    const newid = Math.max.apply(Math, this.listusers.map(function(o) { return o.id; }));
    u.id = newid + 1;
    this.listusers.push(u);
  }

  editUserFromService(u: User) {
    const index = this.listusers.findIndex((e) => e.id === u.id);
    this.listusers[index] = u;
  }

  deleteUserFromService(u: User) {
    this.listusers = this. listusers.filter(item => item.id !== u.id);
    this.listusers.push();
  }

}
