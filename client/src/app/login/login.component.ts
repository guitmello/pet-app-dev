import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Md5 } from 'ts-md5/dist/md5';

import { LoginService } from './login.service';
import { Usuario } from './usuario';
import { ModalAddPComponent } from './modal-add-p/modal-add-p.component';
import { MatDialog, MatSnackBar } from '@angular/material';

const api_url = environment.apiUrl;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  private apiUrl = api_url + '/token';
  data: any = {};
  dataError: any = {};
  postData: any = {};
  usuario: Usuario = new Usuario();
  md5 = new Md5();
  senha: string;
  errorLogin: boolean;

  checkPassword: number;

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'Você deve preencher seu email' :
      this.email.hasError('email') ? 'Email incorreto' :
        '';
  }

  constructor(private httpClient: HttpClient, private loginService: LoginService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar) { }

  openDialog() {
    const dialogRef = this.dialog.open(ModalAddPComponent, {
      width: '300px',
      height: '210px',
      data: {}
    });
  }

  getAuth() {
      if (this.checkPassword === 0) {
        console.log(this.checkPassword);
        this.md5.appendStr(this.senha);
        let newSenha = this.md5.end();
        this.usuario.senha = newSenha.toString();
      } else { this.usuario.senha = this.senha; }

    this.postData = {
      nm_email_usuario: this.usuario.email,
      cd_senha_usuario: this.usuario.senha
    };

    console.log(this.postData);

    this.httpClient.post<Usuario>(this.apiUrl, this.postData).subscribe(auth => {
      this.data = auth;
      console.log(auth);
      this.checkPassword = 1;
      this.fazerLogin();
    }, error => {
      this.dataError = error;
      if (this.dataError) {
        this.snackBar.open('Senha ou Usuário incorreto*', 'OK', {
          duration: 2000,
        });
      }
    });
  }

  ngOnInit() {
    this.checkPassword = 0;
  }

  fazerLogin() {
    this.loginService.fazerLogin(this.usuario, this.data);
  }

}
