import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  key: 'isLoggedIn';

  constructor(private router: Router) { }

  isAuthenticated(): boolean {

    if (localStorage.getItem(this.key)) {
      return true;
    } else {
      return false;
    }
  }

  login(uname: string, pwd: string) {
    if (uname === 'admin@nseit.com' && pwd === 'admin123') {
      localStorage.setItem(this.key, 'true');
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem(this.key);
    this.router.navigate(['']);
  }
}
