import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../security/login/login.service';
import { UserService } from 'src/app/user/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/USER/user.model';

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.scss']
})
export class NavbarTopComponent implements OnInit {

  logged: any = false;

  user: User;
  userId: number;

  constructor(
    private loginService: LoginService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() { }

  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn();
  }

  goUserEdit() {
    this.userId = this.userService.getUserId();
      this.userService.getUser(this.userId).subscribe(response => {
        this.user = response;
        if (this.user.nm_tipo_usuario === 'Pessoa Física') {
          this.router.navigateByUrl('usuario-fisico/' + this.user.id);
        } else if (this.user.nm_tipo_usuario === 'Pessoa Jurídica') {
          this.router.navigateByUrl('usuario-juridico/' + this.user.id);
        }
      });
  }

}
