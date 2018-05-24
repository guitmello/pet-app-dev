import { Component, OnInit } from '@angular/core';
import { Pet } from './pet';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { FormControl, Validators} from '@angular/forms';

const api_url = environment.apiUrl;

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {

  postData: any = {};

  sexoArray: Array<any>;
  especieArray: any = {};
  racaArray: any = {};
  idadeArray: Array<any>;
  tamanhoArray: Array<any>;
  private apiUrl = api_url;

  pet: Pet = new Pet();

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

  constructor(private httpClient: HttpClient, public router: Router, public snackBar: MatSnackBar) { }

  ngOnInit() {

    document.querySelector('#imgupload').addEventListener('change', function () {
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
      }
    });

    this.pet.deficiencia = false;

    this.sexoArray = [
      { value: 'Macho', viewValue: 'Macho' },
      { value: 'Fêmea', viewValue: 'Fêmea' }
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

    this.racaArray = [];
    this.fillEspecie();
  }

  goTo(route: string) {
    this.router.navigate([route]);
  }

  fillRacas() {
    const userToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', userToken);

    this.httpClient.get(api_url + '/api/racas/getracas/' + this.pet.id_especie, { headers }).subscribe(element => {
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

  registerPet() {
    this.apiUrl = this.apiUrl + '/api/animals/create';
    const userToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', userToken);

    let fotobase64 = (<HTMLInputElement>document.getElementById('imgupload')).getAttribute('base64-value');

    if (!fotobase64) {
      fotobase64 = '../../assets/images/ft-pet.png';
    }

    this.postData = {
      nm_animal: this.pet.nome,
      cd_idade_animal: this.pet.cd_idade_animal,
      nm_idade_animal: this.pet.nm_idade_animal,
      nm_cor_animal: this.pet.cor,
      nm_sexo_animal: this.pet.sexo,
      nm_tamanho_animal: this.pet.tamanho,
      ic_deficiencia_animal: this.pet.deficiencia,
      ds_deficiencia_animal: this.pet.ds_deficiencia,
      ds_foto_animal: fotobase64,
      cd_raca_fk: this.pet.id_raca,
      cd_usuario_fk: localStorage.getItem('id'),
      cd_especie_fk: this.pet.id_especie
    };

    return this.httpClient.post<Pet>(this.apiUrl, this.postData, { headers })
      .subscribe(
        res => {
          this.snackBar.open('Pet Cadastrado com Sucesso!', 'OK', {
            duration: 2000,
          });
          this.goTo('meus-pets');
        },
        err => {
          this.snackBar.open('Erro ao Cadastrar Pet', 'OK', {
            duration: 2000,
          });
          this.goTo('meus-pets');
        }
      );
  }


}
