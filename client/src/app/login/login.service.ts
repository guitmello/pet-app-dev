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

  constructor(private router: Router) { }



  fazerLogin(usuario: Usuario, auth: any) {

    this.authCheck = auth;
    console.log(auth);
    console.log(this.authCheck.token);

    if (this.authCheck.token) {
      localStorage.setItem('token', this.authCheck.token);
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/home']);

    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }

  }

}
