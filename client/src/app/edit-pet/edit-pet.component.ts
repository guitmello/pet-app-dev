import { Component, OnInit } from '@angular/core';
import { EditPet } from './edit-pet';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';

const api_url = environment.apiUrl;

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {

  sexoArray: Array<any>;
  postData: any = {};
  editpet: EditPet = new EditPet();
  pets: Array<any>;
  private apiUrl = api_url;

  mostrarLoading: boolean = false;
  mostrarLoadingEmmiter = new EventEmitter<boolean>();

  dataPets: any = {};
  dataRacas: any = {};
  elementData: any = {};
  dataEspecies: any = {};
  dataUsuarios: any = {};
  petsEdit: Array<any>;
  racas: Array<any>;
  especies: Array<any>;
  tamanhoArray: Array<any>;
  idadeArray: Array<any>;

  nome = new FormControl('', [Validators.required]);
  idade = new FormControl('', [Validators.required]);
  text_idade = new FormControl('', [Validators.required]);
  sexo = new FormControl('', [Validators.required]);
  tamanho = new FormControl('', [Validators.required]);
  cor = new FormControl('', [Validators.required]);
  raca = new FormControl('', [Validators.required]);
  especie = new FormControl('', [Validators.required]);


  getNomeErrorMessage() {
    return this.nome.hasError('required') ? 'Preencha o nome do pet' : '';
  }

  getIdadeErrorMessage() {
    return this.idade.hasError('required') ? 'Preencha a idade do pet' : '';
  }

  getTextIdadeErrorMessage() {
    return this.text_idade.hasError('required') ? 'Preencha o complemento da idade do pet' : '';
  }

  getSexoErrorMessage() {
    return this.sexo.hasError('required') ? 'Preencha o sexo do pet' : '';
  }

  getTamanhoErrorMessage() {
    return this.tamanho.hasError('required') ? 'Preencha o tamanho do pet' : '';
  }

  getCorErrorMessage() {
    return this.cor.hasError('required') ? 'Preencha a cor do pet' : '';
  }

  getRacaErrorMessage() {
    return this.raca.hasError('required') ? 'Preencha a raça do pet' : '';
  }

  getEspecieErrorMessage() {
    return this.especie.hasError('required') ? 'Preencha a espécie do pet' : '';
  }

  constructor(private httpClient: HttpClient, private editPet: EditPet, public router: Router,
    private route: ActivatedRoute, public snackBar: MatSnackBar, private appComponent: AppComponent) { }

  id = this.route.snapshot.queryParams['id'];

  ngOnInit() {
    this.editPet.cd_raca_fk = 1;
    this.appComponent.mostrarLoadingEmmiter.subscribe(
      mostrarSpinner => this.mostrarLoading = mostrarSpinner,
    );

    document.querySelector('#imgupload').addEventListener('change', function () {
      this.appComponent.mostrarLoadingEmmiter.emit(true);

      let fotoAnimal;
      let filesSelected = (<HTMLInputElement>document.getElementById('imgupload')).files;
      if (filesSelected.length > 0) {
        let fileToLoad = filesSelected[0];
        let fileReader = new FileReader();
        fileReader.onload = function (fileLoadEvent) {
          let base64value = <FileReader>event.target;
          (<HTMLInputElement>document.getElementById('imgupload')).setAttribute('base64-value', base64value.result);
        };
        fileReader.readAsDataURL(fileToLoad);

        this.appComponent.mostrarLoadingEmmiter.emit(false);
      }
    });

    this.sexoArray = [
      { value: 'Macho', viewValue: 'Macho' },
      { value: 'Femêa', viewValue: 'Femêa' }
    ];

    this.idadeArray = [
      { value: 'Mes(es)', viewValue: 'Mes(es)' },
      { value: 'Ano(s)', viewValue: 'Ano(s)' }
    ];

    this.tamanhoArray = [
      { value: 'Pequeno', viewValue: 'Pequeno' },
      { value: 'Médio', viewValue: 'Médio' },
      { value: 'Grande', viewValue: 'Grande' }
    ];

    this.getDataPet();

  }


  getRacas(url: string) {
    this.httpClient.get(api_url + url).subscribe(racas => {
      this.dataRacas = racas;
      this.racas = this.dataRacas.payload;
    });
  }


  getEspecies(url: string) {
    this.httpClient.get(api_url + url).subscribe(especies => {
      this.dataEspecies = especies;
      this.especies = this.dataEspecies.payload;
      this.getRacas('/api/racas/all');
    });
  }


  getDataPet() {
    this.appComponent.mostrarLoadingEmmiter.emit(true);

    this.apiUrl = this.apiUrl + '/api/animals/' + this.id;
    const userToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', userToken);

    this.httpClient.get(this.apiUrl, { headers }).subscribe(pets => {
      this.getEspecies('/api/especies/all');
      this.dataPets = pets;
      this.editPet = this.dataPets.payload;
      this.editPet.cd_especie_fk = this.editPet.Especie.id;
      this.editPet.cd_raca_fk = this.editPet.Raca.id;
      console.log('this.editPet -->', this.editPet)
    });

    this.appComponent.mostrarLoadingEmmiter.emit(false);
  }

  goTo(route: string) {
    this.router.navigate([route]);
  }


  updatePet(URL) {
    this.appComponent.mostrarLoadingEmmiter.emit(true);

    const userToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', userToken);

    let fotobase64 = (<HTMLInputElement>document.getElementById('imgupload')).getAttribute('base64-value');

    if (!fotobase64) {
      fotobase64 = '../../assets/images/ft-pet.png';
    }

    this.postData = {
      nm_animal: this.editPet.nm_animal,
      cd_idade_animal: this.editPet.cd_idade_animal,
      nm_idade_animal: this.editPet.nm_idade_animal,
      nm_cor_animal: this.editPet.nm_cor_animal,
      nm_sexo_animal: this.editPet.nm_sexo_animal,
      nm_tamanho_animal: this.editPet.nm_tamanho_animal,
      ic_deficiencia_animal: this.editPet.ic_deficiencia_animal,
      ds_deficiencia_animal: this.editPet.ds_deficiencia_animal,
      ds_foto_animal: fotobase64,
      cd_raca_fk: this.editPet.cd_raca_fk,
      cd_usuario_fk: localStorage.getItem('id'),
      cd_especie_fk: this.editPet.cd_especie_fk
    };

    this.httpClient.put<EditPet>(this.apiUrl + URL, this.postData, { headers })
      .subscribe(
        res => {
          this.snackBar.open('Pet Editado com Sucesso!', 'OK', {
            duration: 2000,
          });
          this.appComponent.mostrarLoadingEmmiter.emit(false);
          this.goTo('meus-pets');
        },
        err => {
          this.snackBar.open('Erro ao Editar Pet', 'OK', {
            duration: 2000,
          });
          this.appComponent.mostrarLoadingEmmiter.emit(false);
          this.goTo('meus-pets');
        }
      );
  }

}
