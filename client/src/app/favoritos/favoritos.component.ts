import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";
import { HttpHeaders, HttpParams, HttpClient } from "@angular/common/http";
import { Pet } from "../pet-info/pet-info.component";
import { EventEmitter } from '@angular/core';
import { AppComponent } from "../app.component";

const api_url = environment.apiUrl;

@Component({
  selector: "app-favoritos",
  templateUrl: "./favoritos.component.html",
  styleUrls: ["./favoritos.component.css"]
})
export class FavoritosComponent implements OnInit {
  elementFavorite: any = {};
  pets: any = {};
  elementData: any = {};
  postData: any = {};
  listOfFavoritePets: Array<any>;
  listOfFavoritePets2: Array<any>;

  mostrarLoading: boolean = false;
  mostrarLoadingEmmiter = new EventEmitter<boolean>();

  constructor(public router: Router, private httpClient: HttpClient, private appComponent: AppComponent) {}

  ngOnInit() {
    this.appComponent.mostrarLoadingEmmiter.subscribe(
      mostrarSpinner => this.mostrarLoading = mostrarSpinner,
    );

    this.getFavoritePets();
  }

  moreInfo(id: string) {
    this.router.navigate([`pet-info`]);
  }

  getFavoritePets() {
    this.pets = [];
    let id = parseInt(localStorage.getItem("id"));
    const userToken = localStorage.getItem("token");

    const headers = new HttpHeaders().set("Authorization", userToken);
    this.httpClient
      .get(api_url + "/api/animal/myfavorites/" + id, { headers })
      .subscribe(element => {
        this.elementFavorite = element;
        this.elementFavorite = this.elementFavorite.payload;
        this.elementFavorite.forEach(favorite => {
          this.httpClient
            .get(api_url + "/api/users/" + favorite.cd_usuario_fk, { headers })
            .subscribe(elementUser => {
              this.elementData = elementUser;
              favorite.address1 =
                this.elementData.payload.nm_cidade_usuario +
                " - " +
                this.elementData.payload.nm_estado_usuario;
              favorite.address2 = this.elementData.payload.nm_endereco_usuario;
            });
          this.pets.push(favorite);
        });
      });
      
  }
}
