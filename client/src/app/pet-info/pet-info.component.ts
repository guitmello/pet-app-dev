import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpParams } from '@angular/common/http';

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
  racas: Array<any>;
  especies: Array<any>;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {
    this.getPetInfo(this.route.snapshot.queryParams['id']);
  }

  ngOnInit() {
    this.pet.ic_deficiencia_animal = false;
    this.getRacas('/api/racas/all');
    this.getEspecies('/api/especies/all');
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



  getPetInfo(id) {
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
