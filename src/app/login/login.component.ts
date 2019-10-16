import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  msg = '';

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  LoginUser() {

    if (this.loginForm.invalid) {
      return;
    }

    const uname = this.loginForm.get('email').value;
    const pwd = this.loginForm.get('password').value;

    const output = this.authService.login(uname, pwd);
    if (output === true) {
      this.router.navigate(['list-user']);
    } else {
      this.msg = 'Invalid credentials';
    }

  }

  cancel() {
    this.loginForm.reset();
  }

  gotohome() {
    this.router.navigate(['']);
  }

}
