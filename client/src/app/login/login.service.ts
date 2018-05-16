import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';
import { LoginComponent } from './login.component';

@Injectable()
export class LoginService {
  authCheck: any = {};

  usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();
  idUsuario = new EventEmitter<string>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario, auth: any) {

    this.authCheck = auth;
    console.log(this.authCheck);

    if (this.authCheck.token) {
      sessionStorage.setItem('id', this.authCheck.id);
      sessionStorage.setItem('email', this.authCheck.email);

      localStorage.setItem('id', this.authCheck.id);
      localStorage.setItem('token', 'jwt ' + this.authCheck.token);
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.idUsuario.emit(localStorage.getItem('id'));
      this.router.navigate(['/home']);

    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }

  }

}
