import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../_model/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  listusers: User[] = [
      { id: 1, firstname: 'A A', lastname: 'A', email: 'aa@aa.com', password: '' },
      { id: 2, firstname: 'B B', lastname: 'B', email: 'bb@bb.com', password: '' },
      { id: 3, firstname: 'C C', lastname: 'C', email: 'cc@cc.com', password: '' }
    ];

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: no-inferrable-types
  private url: string = '/assets/data/users.json';
  // tslint:disable-next-line: no-inferrable-types
  private baseUrl: string = 'http://localhost:4500';

  getUsersFromApi(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + '/api/users');
  }

  getUserById(id: number) {
    return this.http.get(this.baseUrl + '/users/' + id);
  }

  addUserFromApi(u: User): Observable<User> {
    // tslint:disable-next-line: only-arrow-functions
    const newid = Math.max.apply(Math, this.listusers.map(function(o) { return o.id; }));
    u.id = newid + 1;
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.post<User>(this.baseUrl + '/api/register/', u, httpOptions);
    // return this.http.post<User>(this.baseUrl + '/users/', u, httpOptions);
  }

  editUserFromApi(u: User): Observable<User> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.put<User>(this.baseUrl + '/users/', u, httpOptions);
  }

  deleteUserFromApi(u: User): Observable<User> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.delete<User>(this.baseUrl + '/api/users?id=' + u.id, httpOptions);
  }

  getUsersFromJson(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

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

  registerUser(u: User) {
    const newid = Math.max.apply(Math, this.listusers.map(function(o) { return o.id; }));
    u.id = newid + 1;
    this.listusers.push(u);
  }

}
