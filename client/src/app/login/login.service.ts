import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';
import { LoginComponent } from './login.component';

@Injectable()
export class LoginService {
  authCheck: Array<any> = [];

  usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario, auth: any) {
    alert(usuario.email);
    this.authCheck = auth.authUser;

    if (usuario.email === this.authCheck[0].nm_email_usuario && usuario.senha === this.authCheck[0].cd_senha_usuario) {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/']);

    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }

  }

}
