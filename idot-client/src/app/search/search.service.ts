import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../app.api';
import { User } from '../user/user.model';
import { Observable } from 'rxjs';
import { Pet } from '../pet/pet.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  urlSearchPet = '/api/animals/getByFilter/';
  urlSearchUser = '/api/users/getByFilter/';

  constructor(
    private http: HttpClient
  ) { }

  getOngSearch(ong: string): Observable<User[]> {
    return this.http.get<User[]>(API_URL + this.urlSearchUser + ong);
  }

  getPetSearch(specie: number, race: number): Observable<Pet[]> {
    return this.http.get<Pet[]>(API_URL + this.urlSearchPet + specie + '&' + race);
  }
}
