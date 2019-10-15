import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUser: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    this.addUser = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      lastname: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  AddUser(addUser) {
      console.log(addUser.value);
  }

  cancel() {
    this.addUser.reset();
  }

  gotoList() {
    this.router.navigate(['list-user']);
  }

}
