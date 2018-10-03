import { User } from '../../USER/user.model';
import { API_URL } from '../../app.api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';

@Injectable()
export class LoginService {

  user: User;
  lastUrl: string;

  constructor(private http: HttpClient, private router: Router) {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd))
    .subscribe((e: NavigationEnd) => this.lastUrl = e.url);
  }

  isLoggedIn(): boolean {
    if (this.user) {
      localStorage.setItem('id', this.user.id);
      localStorage.setItem('token', 'jwt ' + this.user.token);
    }
    return this.user !== undefined;
  }

  login(nm_email_usuario: string, cd_senha_usuario: string): Observable<User> {
    return this.http.post<User>(`${API_URL}/token`, {nm_email_usuario: nm_email_usuario, cd_senha_usuario: cd_senha_usuario})
      .pipe(
        tap(user => this.user = user)
      );
  }

  logout() {
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    this.user = undefined;
  }

  handleLogin(path: string = this.lastUrl) {
    this.router.navigate(['/login', btoa(path)]);
  }

}
