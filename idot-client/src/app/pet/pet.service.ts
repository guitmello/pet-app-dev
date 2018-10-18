import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pet } from './pet.model';
import { API_URL } from '../app.api';
import { Observable } from 'rxjs';

@Injectable()
export class PetService {

  response: any = [];
  urlGetAllPets = '/api/animals/getAllAnimals';
  urlGetMyPets = '/api/animals/myanimals/';
  urlGetMyFavorites = '/api/animals/myfavorites/';
  urlGetPetByFilter = '/api/animals/getByFilter/';
  urlGetPet = '/api/animals/';
  urlPostPet = '/api/animals/create';
  urlPutPet = '/api/animals/update/';
  urlGetSpecies = '/api/especies/all';
  urlGetRaces = '/api/racas/all';
  urlGetFavorite = '/api/favoritos/';
  urlPostFavorite = '/api/favoritos/create';

  constructor(private http: HttpClient) { }

  getAllPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(API_URL + this.urlGetAllPets);
  }

  getMyPets(id: number): Observable<Pet[]> {
    return this.http.get<Pet[]>(API_URL + this.urlGetMyPets + id);
  }

  getMyFavorites(id: number): Observable<Pet[]> {
    return this.http.get<Pet[]>(API_URL + this.urlGetMyFavorites + id);
  }

  getPet(id: number): Observable<Pet> {
    return this.http.get<Pet>(API_URL + this.urlGetPet + id);
  }

  getPetByFilter(specie: string, race: string): Observable<Pet> {
    return this.http.get<Pet>(API_URL + this.urlGetPetByFilter + specie + '&' + race);
  }

  getSpecies(): Observable<Pet[]> {
    return this.http.get<Pet[]>(API_URL + this.urlGetSpecies);
  }

  getRaces(): Observable<Pet[]> {
    return this.http.get<Pet[]>(API_URL + this.urlGetRaces);
  }

  createPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(API_URL + this.urlPostPet, pet);
  }

  editPet(id: number, pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(API_URL + this.urlPutPet + id + '/update', pet);
  }

  deletePet(id: number): Observable<Pet> {
    return this.http.delete<Pet>(API_URL + this.urlGetPet + id + '/destroy');
  }

  addFavorite(pet: Pet): Observable<Pet[]> {
    return this.http.post<Pet[]>(API_URL + this.urlPostFavorite, pet);
  }

  deleteFavorite(id: number): Observable<Pet[]> {
    return this.http.get<Pet[]>(API_URL + this.urlGetMyPets + id + '/destroy');
  }

}
