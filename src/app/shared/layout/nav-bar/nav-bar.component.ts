import { AuthenticationService } from '../../../../app/_services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }

  onLogout() {
    this.auth.logout();
  }

}
