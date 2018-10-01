import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../security/login/login.service';

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.scss']
})
export class NavbarTopComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    console.log(this.loginService.isLoggedIn());
  }

}
