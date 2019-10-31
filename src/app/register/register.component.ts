import { AuthenticationService } from '../_services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { User } from '../_model/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisterForm: FormGroup;
  Submitted = false;
  Msg: string = '';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.RegisterForm = this.formBuilder.group({
      id: [''],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ClearForm() {
    this.RegisterForm.reset();
  }

  public findInvalidControls() {
    const invalid = [];
    const controls = this.RegisterForm.controls;
    for (const name in controls) {
        if (controls[name].invalid) {
          console.log('Invalid: ' + name);
        } else {
          console.log('Valid: ' + name);
        }
    }
    return invalid;
}

  OnSubmit() {

    this.Submitted = true;
    if (this.RegisterForm.invalid) {
      return;
    }

    // const min = 6;
    // const max = 1000;
    // const newid = Math.floor(Math.random() * (max - min + 1) + min);

    const u: User = { id: 0,
      firstname: this.RegisterForm.value.firstname,
      lastname: this.RegisterForm.value.lastname,
      email: this.RegisterForm.value.email,
      password: this.RegisterForm.value.firstname
    };

    const output = this.userService.registerUser(u);
    alert ('User registered successfully. Kindly login to continue.')

    this.router.navigate(['login']);

    // this.authService.registerUser(u)
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //       localStorage.setItem('isLoggedIn', 'true');
    //       alert('User ' + u.firstname + ' registered successfully');
    //       this.router.navigate(['list-user']);
    //     },
    //     err => console.log(err)
    //   );

  }

}
