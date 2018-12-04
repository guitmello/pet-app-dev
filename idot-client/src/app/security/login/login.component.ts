import { User } from '../../user/user.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './login.service';
import { ModalUserOptionComponent } from 'src/app/user/modal-user-option/modal-user-option.component';
import { MatDialog } from '@angular/material';
import { NotificationService } from '../../notification/notification.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder,
    private notificationService: NotificationService,
    private loginService: LoginService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      nm_email_usuario: this.fb.control('', [Validators.required, Validators.email]),
      cd_senha_usuario: this.fb.control('', [Validators.required])
    });
  }

  login() {
    this.loginService
      .login(this.loginForm.value.nm_email_usuario, this.loginForm.value.cd_senha_usuario)
      .subscribe(user => {
        this.router.navigate(['/home']);
      }, err => {
        console.log(err);
        this.notificationService.notification('Email ou usuário incorreto.');
      });
  }

  openDialog() {
    this.dialog.open(ModalUserOptionComponent, {
      width: '300px',
      height: '210px',
      data: {}
    });
  }

}
