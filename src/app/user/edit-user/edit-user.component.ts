import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  editUser: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    this.editUser = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      lastname: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  EditUser(editUser) {
    console.log(editUser.value);
  }

  cancel() {
    this.editUser.reset();
  }

  logOff() {
    this.router.navigate(['']);
  }

}
