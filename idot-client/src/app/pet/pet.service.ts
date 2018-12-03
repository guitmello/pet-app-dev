import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pet } from './pet.model';
import { PetFavorite } from './petFavorite.model';
import { API_URL } from '../app.api';
import { Observable } from 'rxjs';

@Injectable()
export class PetService {

  response: any = [];
  urlGetAllPets = '/api/animals/getAllAnimals';
  urlGetMyPets = '/api/animals/myanimals/';
  urlGetMyFavorites = '/api/animal/myfavorites/';
  urlGetPetByFilter = '/api/animals/getByFilter/';
  urlGetPet = '/api/animals/';
  urlPostPet = '/api/animals/create';
  urlPutPet = '/api/animals/';
  urlGetSpecies = '/api/especies/all';
  urlGetRaces = '/api/racas/getracas/';
  urlGetFavorite = '/api/favoritos/';
  urlPostFavorite = '/api/favoritos/create';

  petRemoved = new EventEmitter<Pet>();

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

  getRaces(id): Observable<Pet[]> {
    return this.http.get<Pet[]>(API_URL + this.urlGetRaces + id);
  }

  createPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(API_URL + this.urlPostPet, pet);
  }

  editPet(pet: Pet): Observable<Pet> {
    return this.http.put<Pet>(API_URL + this.urlPutPet + pet.id + '/update', pet);
  }

  deletePet(id: number): Observable<Pet> {
    return this.http.delete<Pet>(API_URL + this.urlGetPet + id + '/destroy');
  }

  removePet(pet: Pet) {
    return this.petRemoved.emit(pet);
  }

  addFavorite(petFavorite: PetFavorite): Observable<PetFavorite> {
    return this.http.post<PetFavorite>(API_URL + this.urlPostFavorite, petFavorite);
  }

  deleteFavorite(id: number): Observable<Pet> {
    return this.http.get<Pet>(API_URL + this.urlGetMyPets + id + '/destroy');
  }

}
