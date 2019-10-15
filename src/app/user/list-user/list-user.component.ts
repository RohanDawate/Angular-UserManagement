import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_model/User';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})

export class ListUserComponent implements OnInit {

  users: any;

  constructor(private router: Router) { }

  ngOnInit() {
    // this.users = this.msgService.getUsers();
  }

  addUser(): void {
    this.router.navigate(['add-user']);
  }

  editUser(u: User): void {
    localStorage.setItem('editUser', JSON.stringify(u));
    this.router.navigate(['user-edit']);
  }

  deleteUser(u: User): void {
    // this.msgService.deleteProduct(p);
    // this.products = this.msgService.getProducts();
  }

  logOff(): void {
    this.router.navigate(['']);
  }
}
