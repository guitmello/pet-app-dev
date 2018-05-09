import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';

const api_url = environment.apiUrl;

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  elementFavorite: any = {};
  listOfFavoritePets: Array<any>;

  constructor(
    public router: Router, private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.getFavoritePets();
  }

  moreInfo(id: string) {
    this.router.navigate([`pet-info`]);
  }

  getFavoritePets() {

    let id = parseInt(localStorage.getItem('id'));
    const userToken = localStorage.getItem('token');

    const headers = new HttpHeaders().set('Authorization', userToken);

    this.httpClient.get(api_url + '/api/favoritos/myfavorites/' + id, { headers }).subscribe(element => {
      this.elementFavorite = element;
      if (this.elementFavorite.cd_usuario_fk == id) {
        this.httpClient.get(api_url + '/api/animals/' + this.elementFavorite.cd_animal_fk, { headers }).subscribe(elementPet => {

        });
      }
    });

  }

}
