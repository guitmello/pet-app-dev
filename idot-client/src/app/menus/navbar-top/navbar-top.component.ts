import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../security/login/login.service';

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.scss']
})
export class NavbarTopComponent implements OnInit {

  logged: any = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {

  }

  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn();
  }

}
