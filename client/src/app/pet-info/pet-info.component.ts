import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';

const api_url = environment.apiUrl;

@Component({
  selector: 'app-pet-info',
  templateUrl: './pet-info.component.html',
  styleUrls: ['./pet-info.component.css']
})
export class PetInfoComponent implements OnInit {

  pet: any = {};
  dataRacas: any = {};
  dataEspecies: any = {};
  elementDataPet: any = {};
  elementDataUser: any = {};
  postData: any = {};
  racas: Array<any>;
  especies: Array<any>;
  url: string;
  urlRemove: string;
  fav: boolean;
  favd: string;

  mostrarLoading: boolean = false;
  mostrarLoadingEmmiter = new EventEmitter<boolean>();

  constructor(private route: ActivatedRoute, private httpClient: HttpClient, public router: Router, private appComponent: AppComponent) {
    this.getPetInfo(this.route.snapshot.queryParams['id']);
    this.fav = !this.route.snapshot.queryParams['fav'];
    this.favd = this.route.snapshot.queryParams['favd'];
    this.url = '/api/favoritos/create';
    this.urlRemove = '/api/favoritos/';
  }

  ngOnInit() {
    this.appComponent.mostrarLoadingEmmiter.subscribe(
      mostrarSpinner => this.mostrarLoading = mostrarSpinner,
    );

    /*if (this.pet.ic_deficiencia_animal === undefined) {
      this.pet.ic_deficiencia_animal = false;
      const deficiencia_view = false;
    } else if (this.pet.ic_deficiencia_animal === true) {
      this.pet.ic_deficiencia_animal = true;
      const deficiencia_view = true;
    }*/
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
          console.log('Error occured');
        }
      );
  }

  removerFavPet(id: number) {
    const userToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', userToken);

    this.postData = {
      cd_animal_fk: id,
      cd_usuario_fk: localStorage.getItem('id')
    };

    return this.httpClient.delete(api_url + this.urlRemove + this.favd + '/destroy', { headers })
      .subscribe(
        res => {
          this.router.navigate(['/favoritos']);
        },
        err => {
          console.log('Error occured');
        }
      );
  }


  getPetInfo(id) {
    const userToken = localStorage.getItem('token');

    const headers = new HttpHeaders().set('Authorization', userToken);

    this.httpClient.get(api_url + '/api/animals/' + id, { headers }).subscribe(element => {
      this.elementDataPet = element;
      this.pet = this.elementDataPet.payload;
      this.pet.title = '';

    });
  }

  formatNumberPhone(number) {
    var length = number.length;
    var phoneFormated;
    if (length === 10) {
      phoneFormated = '(' + number.substring(0, 2) + ') ' + number.substring(2, 6) + '-' + number.substring(6, 10);
    } else if (length === 11) {
      phoneFormated = '(' + number.substring(0, 2) + ') ' + number.substring(2, 7) + '-' + number.substring(7, 11);
    }
    return phoneFormated;
  }

}

export class Pet {
  cd_animal_fk: number;
  cd_usuario_fk: number;
}
