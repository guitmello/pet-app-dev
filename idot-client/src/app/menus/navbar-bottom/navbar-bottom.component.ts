import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../security/login/login.service';

@Component({
  selector: 'app-navbar-bottom',
  templateUrl: './navbar-bottom.component.html',
  styleUrls: ['./navbar-bottom.component.scss']
})
export class NavbarBottomComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.isLoggedIn();
  }

}
