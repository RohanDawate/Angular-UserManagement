import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Services
import { UserService } from '../../_services/user.service';

// Models
import { User } from 'src/app/_model/User';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  listuser: User[] = [];
  addUser: FormGroup;
  a1: boolean;

  constructor(
      private router: Router,
      private userService: UserService
  ) { }

  ngOnInit() {
    this.addUser = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      lastname: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  AddUser() {
    const u: User = { id: 0,
      firstname: this.addUser.value.firstname,
      lastname: this.addUser.value.lastname,
      email: this.addUser.value.email
    };
    this.userService.addUserFromService(u);
    this.router.navigate(['list-user']);
  }

  cancel() {
    this.addUser.reset();
  }

  gotoList() {
    this.router.navigate(['list-user']);
  }

}
