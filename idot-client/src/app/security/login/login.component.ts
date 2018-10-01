import { User } from '../../user/user.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder,
    private loginService: LoginService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      nm_email_usuario: this.fb.control('', [Validators.required, Validators.email]),
      cd_senha_usuario: this.fb.control('', [Validators.required])
    });
    console.log(this.loginService.isLoggedIn());
  }

  login() {
    this.loginService
      .login(this.loginForm.value.nm_email_usuario, this.loginForm.value.cd_senha_usuario)
      .subscribe(user => {
        console.log(this.loginService.isLoggedIn());
        this.router.navigate(['/home']);
      }, error => {

      });
    }

}
