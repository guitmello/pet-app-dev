import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { MatButtonModule, MatIconModule } from '@angular/material';

const api_url = environment.apiUrl;

@Component({
  selector: 'app-pet-info',
  templateUrl: './pet-info.component.html',
  styleUrls: ['./pet-info.component.css']
})
export class PetInfoComponent implements OnInit {

  pet: {
    id: any,
    name: any,
    age: any,
    breed: any,
    species: any,
    genre: any,
    color: any,
    size: any,
    city: any,
    state: any,
    street: any,
    title: any,
    address1: any,
    address2: any,
    ic_deficiencia_animal: any
  };
  dataRacas: any = {};
  dataEspecies: any = {};
  elementDataPet: any = {};
  elementDataUser: any = {};
  postData: any = {};
  racas: Array<any>;
  especies: Array<any>;
  url: string;
  fav: boolean;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {
    this.getPetInfo(this.route.snapshot.queryParams['id']);
    this.fav = !this.route.snapshot.queryParams['fav'];
    this.url = '/api/favoritos/create';
  }

  ngOnInit() {
    if (this.pet.ic_deficiencia_animal == undefined) {
      this.pet.ic_deficiencia_animal = false;
      let deficiencia_view = false;
    } else if (this.pet.ic_deficiencia_animal == true) {
      this.pet.ic_deficiencia_animal = true;
      let deficiencia_view = true;
    }
  }


  getRacas(url: string) {
    this.httpClient.get(api_url + url).subscribe(racas => {
      this.dataRacas = racas;
      this.racas = this.dataRacas.payload;
      // console.log(this.racas);
    });
  }

  getEspecies(url: string) {
    this.httpClient.get(api_url + url).subscribe(especies => {
      this.dataEspecies = especies;
      this.especies = this.dataEspecies.payload;
      // console.log(this.especies);
    });
  }

  favoritarPet(id: number) {
    const userToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', userToken);

    this.postData = {
      cd_animal_fk: id,
      cd_usuario_fk: localStorage.getItem('id')
    };

    return this.httpClient.post<Pet>(api_url + this.url, this.postData, { headers })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }


  getPetInfo(id) {
    this.getRacas('/api/racas/all');
    this.getEspecies('/api/especies/all');

    const userToken = localStorage.getItem('token');

    const headers = new HttpHeaders().set('Authorization', userToken);

    this.httpClient.get(api_url + '/api/animals/' + id, { headers }).subscribe(element => {
      this.elementDataPet = element;
      this.pet = this.elementDataPet.payload;
      this.pet.title = '';
      this.httpClient.get(api_url + '/api/users/' + this.elementDataPet.payload.cd_usuario_fk, { headers })
        .subscribe(elementUser => {
          this.elementDataUser = elementUser;
          this.pet.address1 = this.elementDataUser.payload.nm_cidade_usuario + ' - ' + this.elementDataUser.payload.nm_estado_usuario;
          this.pet.address2 = this.elementDataUser.payload.nm_endereco_usuario;
        });
      for (let x = 0; x <= this.racas.length - 1; x++) {
        if (this.elementDataUser.cd_raca_fk === this.racas[x].id_raca) {
          this.pet.breed = this.racas[x].nm_raca;
        }
      }
      for (let y = 0; y <= this.especies.length - 1; y++) {
        if (this.elementDataUser.cd_especie_fk === this.especies[y].id_especie) {
          this.pet.species = this.especies[y].nm_especie;
        }
      }
      console.log('this.pet', this.pet);
    });
  }

}

export class Pet {
  cd_animal_fk: number
  cd_usuario_fk: number
}
