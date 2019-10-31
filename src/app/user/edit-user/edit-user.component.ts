import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

// Services
import { AuthenticationService } from '../../_services/authentication.service';
import { UserService } from '../../_services/user.service';

// Models
import { User } from 'src/app/_model/User';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})

export class EditUserComponent implements OnInit {

  editUser: FormGroup;
  user: User;

  constructor(
      private router: Router,
      private authService: AuthenticationService,
      private userService: UserService,
      private formbuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.editUser = this.formbuilder.group({
      _id: [''],
      id: [''],
      firstname: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      lastname: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['']
    });

    this.user = JSON.parse(localStorage.getItem('editUser'));

    this.editUser.setValue( { id: this.user.id, firstname: this.user.firstname,
      lastname: this.user.lastname, email: this.user.email  });
  }

  EditUser() {

    if (this.editUser.invalid) {
      return;
    }

    if (confirm('Are you sure to edit this record')) {
      const u: User = { id: this.editUser.value.id,
                        firstname: this.editUser.value.firstname,
                        lastname: this.editUser.value.lastname,
                        email: this.editUser.value.email,
                        password: this.editUser.value.password
                      };
      this.userService.editUserFromService(u);
      this.router.navigate(['list-user']);
    }
  }

  cancel() {
    this.editUser.reset();
  }

  logOff() {
    this.authService.logout();
  }

}
