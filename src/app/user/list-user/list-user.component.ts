import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../../_model/User';

import { AuthenticationService } from '../../_services/authentication.service';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})

export class ListUserComponent implements OnInit {

  listusers: User[] = [];
  u: User;

  constructor(
      private router: Router,
      private userService: UserService,
      private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.listusers = this.userService.getUsersFromService();
    // this.userService.getUsersFromJson()
    //     .subscribe(data => this.listusers = data);
    // this.userService.getUsersFromApi()
    //    .subscribe(data => this.listusers = data);
  }

  addUser(): void {
    this.router.navigate(['add-user']);
  }

  editUser(u: User): void {
    localStorage.setItem('editUser', JSON.stringify(u));
    this.router.navigate(['edit-user']);
  }

  deleteUser(u: User): void {

    if (confirm('Do you want to delete user?')) {
      // this.userService.deleteUserFromApi(u)
      //     .subscribe(data => u = data);
      this.userService.deleteUserFromService(u);
      this.router.navigate(['list-user']);
      this.getUsers();
    }

  }

  logOff(): void {
    this.authService.logout();
  }
}
