import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user/user.model';
import { API_URL } from '../app.api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {

  response: any = [];
  urlGetUser = '/api/users/';
  urlGetUserByFilter = '/api/users/getByFilter/';
  urlPostUser = '/api/users/create';
  urlGetCityState = '/api/citystate';

  constructor(private http: HttpClient) { }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(API_URL + this.urlGetUser + id);
  }

  getUserByFilter(ong: string): Observable<User> {
    return this.http.get<User>(API_URL + this.urlGetUserByFilter + ong);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(API_URL + this.urlPostUser, user);
  }

  editUser(user: User): Observable<User> {
    return this.http.put<User>(API_URL + this.urlGetUser + user.id + '/update', user);
  }

  getUserId() {
    const token = localStorage.getItem('token');
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64)).id;
  }

}
