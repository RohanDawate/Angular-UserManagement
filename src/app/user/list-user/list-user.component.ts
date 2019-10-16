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

  constructor(
      private router: Router,
      private userService: UserService,
      private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    // this.userService.getUsersFromService().subscribe(data => this.listusers = data);
    this.listusers = this.userService.getUsersFromService();
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
      this.userService.deleteUserFromService(u);
      this.router.navigate(['list-user']);
      this.getUsers();
    }

  }

  logOff(): void {
    this.authService.logout();
  }
}
