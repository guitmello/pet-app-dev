import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { LoginService } from './login.service';
import { Usuario } from './usuario';
import { ModalAddPComponent } from './modal-add-p/modal-add-p.component';
import { MatDialog } from '@angular/material';

const api_url = environment.apiUrl;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  private apiUrl = api_url;
  data: any = {};

  usuario: Usuario = new Usuario();

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'Você deve preencher seu email' :
      this.email.hasError('email') ? 'Email incorreto' :
        '';
  }

  constructor(private httpClient: HttpClient, private loginService: LoginService, public dialog: MatDialog) { }

  openDialog(){
    let dialogRef = this.dialog.open(ModalAddPComponent, {
      width: '300px',
      height: '210px',
      data: { }
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }

  getAuth() {
    this.apiUrl += '/login';
    this.httpClient.get(this.apiUrl).subscribe(auth => {
      this.data = auth;
      console.log(this.data);
      this.fazerLogin();
    });
  }

  ngOnInit() {

  }

  fazerLogin() {
    this.loginService.fazerLogin(this.usuario, this.data);
  }

}

