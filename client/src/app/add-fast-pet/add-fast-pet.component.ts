import { Component, OnInit, EventEmitter } from '@angular/core';
import { AddFastPet } from './add-fast-pet';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppComponent } from '../app.component';

const api_url = environment.apiUrl;

@Component({
  selector: 'app-add-fast-pet',
  templateUrl: './add-fast-pet.component.html',
  styleUrls: ['./add-fast-pet.component.css']
})
export class AddFastPetComponent implements OnInit {

  private mapsUrl = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=';
  private mapsUrlFinal = '&sensor=true';
  private api_urlCityState = api_url + '/api/citystate';
  private apiUrl = api_url;

  filtredStates: Array<any>;
  json: any = {};
  citiesArrays: any = {};

  cityStates: any = {};
  filtredCities: Array<any>;

  postData: any = {};

  especieArray: any = {};
  racaArray: any = {};

  mostrarLoading: boolean = false;
  mostrarLoadingEmmiter = new EventEmitter<boolean>();

  form: FormGroup;

  addfastpet: AddFastPet = new AddFastPet();
  addressfastpet: any = {};
  dataAdress: any = {};
  adress: any = {};

  constructor(private httpClient: HttpClient, private addFastPet: AddFastPet, public router: Router,
    public snackBar: MatSnackBar, private formBuilder: FormBuilder, private appComponent: AppComponent) { }

  ngOnInit() {

    this.racaArray = []
    this.fillEspecie();

    this.appComponent.mostrarLoadingEmmiter.subscribe(
      mostrarSpinner => this.mostrarLoading = mostrarSpinner,
    );

    document.querySelector('#imgupload').addEventListener('change', function () {

      const fotoAnimal = '';
      const filesSelected = (<HTMLInputElement>document.getElementById('imgupload')).files;
      if (filesSelected.length > 0) {
        const fileToLoad = filesSelected[0];
        const fileReader = new FileReader();
        fileReader.onload = function (fileLoadEvent) {
          const base64value = <FileReader>event.target;
          (<HTMLInputElement>document.getElementById('imgupload')).setAttribute('base64-value', base64value.result);
        };
        fileReader.readAsDataURL(fileToLoad);


      }
    });
    this.form = this.formBuilder.group({
      nm_estado_animal: [null],
      nm_cidade_animal: [null],
      nm_endereco_animal: [null],
      nm_numero_endereco_animal: [null]
    });
  }


  fillRacas() {
    const userToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', userToken);

    this.httpClient.get(api_url + '/api/racas/getracas/' + this.addFastPet.cd_especie_fk, { headers }).subscribe(element => {
      this.racaArray = element;
      this.racaArray = this.racaArray.payload;
    });
  }

  fillEspecie() {
    const userToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', userToken);

    this.httpClient.get(api_url + '/api/especies/all', { headers }).subscribe(element => {
      this.especieArray = element;
      this.especieArray = this.especieArray.payload;
    });
  }

  getCityState() {
    this.appComponent.mostrarLoadingEmmiter.emit(true);

    this.filtredStates = [];
    this.httpClient.get(this.api_urlCityState).subscribe(jsonStates => {
      this.json = jsonStates;
      this.cityStates = this.json.estados;
      if (this.cityStates) {
        this.cityStates.forEach(state => {
          this.filtredStates.push(state.sigla);
        });
      }

      this.appComponent.mostrarLoadingEmmiter.emit(false);
    });
  }

  async getAdress() {
    navigator.geolocation.getCurrentPosition(this.showPosition);

    await this.httpClient.get(this.mapsUrl + localStorage.getItem('MyLatitude') + ',' + localStorage.getItem('MyLongitude')
      + this.mapsUrlFinal).subscribe(adress => {
        this.dataAdress = adress;
        this.addressfastpet = this.dataAdress.results;
        console.log(this.addressfastpet);
        this.addFastPet.cd_cep_animal = this.addressfastpet[3].address_components[7].long_name;
        this.addFastPet.nm_estado_animal = this.addressfastpet[0].address_components[5].short_name;
        this.addFastPet.nm_cidade_animal = this.addressfastpet[0].address_components[4].short_name;
        this.addFastPet.nm_endereco_animal = this.addressfastpet[0].address_components[1].long_name;
        this.addFastPet.cd_numero_endereco_animal = this.addressfastpet[0].address_components[0].long_name;
      });

    this.appComponent.mostrarLoadingEmmiter.emit(false);

  }

  registerPet() {
    this.appComponent.mostrarLoadingEmmiter.emit(true);

    this.apiUrl = this.apiUrl + '/api/animals/create';
    const userToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', userToken);

    let fotobase64 = (<HTMLInputElement>document.getElementById('imgupload')).getAttribute('base64-value');

    if (!fotobase64) {
      fotobase64 = '../../assets/images/ft-pet.png';
    }

    this.postData = {
      ds_foto_animal: fotobase64,
      cd_usuario_fk: localStorage.getItem('id'),
      nm_animal: this.addFastPet.nm_animal,
      cd_cep_animal: parseInt(this.addFastPet.cd_cep_animal.replace('-', '')),
      nm_estado_animal: this.addFastPet.nm_estado_animal,
      nm_cidade_animal: this.addFastPet.nm_cidade_animal,
      nm_endereco_animal: this.addFastPet.nm_endereco_animal,
      cd_numero_endereco_animal: parseInt(this.addFastPet.cd_numero_endereco_animal),
      cd_raca_fk: this.addFastPet.cd_raca_fk,
      cd_especie_fk: this.addFastPet.cd_especie_fk
    };

    return this.httpClient.post<AddFastPet>(this.apiUrl, this.postData, { headers })
      .subscribe(
        res => {
          this.snackBar.open('Pet Cadastrado com Sucesso!', 'OK', {
            duration: 2000,
          });
          this.addFastPet = new AddFastPet();
          this.appComponent.mostrarLoadingEmmiter.emit(false);
          this.goTo('meus-pets');
        },
        err => {
          this.snackBar.open('Erro ao Cadastrar Pet', 'OK', {
            duration: 2000,
          });
          this.addFastPet = new AddFastPet();
          this.appComponent.mostrarLoadingEmmiter.emit(false);
          // this.goTo('meus-pets');
        }
      );

  }

  goTo(route: string) {
    this.router.navigate([route]);
  }

  emptyInput() {
    if (this.addFastPet.nm_estado_animal == '' || this.addFastPet.nm_estado_animal == undefined) {
      this.getCityState();
    }
  }

  blurInStates() {
    if (!!this.addFastPet.nm_estado_animal) {
      this.fillCitiesFromStates();
    }
  }

  fillFiltredStates() {
    if (!!this.addFastPet.nm_estado_animal) {
      this.fillCitiesFromStates();
    }
  }

  fillCitiesFromStates() {
    this.appComponent.mostrarLoadingEmmiter.emit(true);

    this.filtredStates = [];
    this.citiesArrays = [];
    this.filtredCities = [];
    if (this.cityStates) {
      this.cityStates.forEach(state => {
        if (this.addFastPet.nm_estado_animal.toLowerCase() === state.sigla.slice(0, this.addFastPet.nm_estado_animal.length).toLowerCase()) {
          this.filtredStates.push(state.sigla);
          this.citiesArrays.push(state.cidades);
        }
      });
    }
    this.citiesArrays.forEach(cities => {
      cities.forEach(city => {
        this.filtredCities.push(city);
      });

      this.appComponent.mostrarLoadingEmmiter.emit(false);
    });
  }

  fillFiltredCities() {
    this.appComponent.mostrarLoadingEmmiter.emit(true);

    this.filtredCities = [];
    if (!!this.addFastPet.nm_cidade_animal) {
      this.citiesArrays.forEach(cities => {
        cities.forEach(city => {
          if (this.addFastPet.nm_cidade_animal.toLowerCase() === city.slice(0, this.addFastPet.nm_cidade_animal.length).toLowerCase()) {
            this.filtredCities.push(city);
          }
        });

        this.appComponent.mostrarLoadingEmmiter.emit(false);
      });
    }
  }

  showPosition(position) {
    localStorage.setItem('MyLatitude', position.coords.latitude);
    localStorage.setItem('MyLongitude', position.coords.longitude);
  }

}
