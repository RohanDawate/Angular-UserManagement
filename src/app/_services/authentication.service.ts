import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../_model/User';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  authKey: 'isLoggedIn';
  listusers: User[];
  private loggedIn = new BehaviorSubject<boolean>(true);

  // tslint:disable-next-line: no-inferrable-types
  private baseUrl: string = 'http://localhost:4500';

  constructor(private router: Router,
              private http: HttpClient,
              private userService: UserService
  ) { }

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  isAuthenticated() {
    console.log(localStorage.getItem(this.authKey) !== null);
    return (localStorage.getItem(this.authKey) !== null);
  }

  login(email: string, pwd: string) {
    this.listusers = this.userService.getUsersFromService();
    let obj = this.listusers.find(o => o.email === email && o.password === pwd);

    console.log(obj);
    console.log(this.authKey);
    if (obj !== null) {
      localStorage.setItem(this.authKey, 'true');
      return true;
    }

    return false;

  }

  // registerUser(u: User): Observable<User> {
  //   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
  //   return this.http.post<User>(this.baseUrl + '/api/register/', u, httpOptions);
  // }

  logout() {
    localStorage.removeItem(this.authKey);
    this.router.navigate(['']);
  }
}
