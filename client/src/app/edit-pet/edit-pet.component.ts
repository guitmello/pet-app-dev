import { Component, OnInit } from '@angular/core';
import { EditPet } from './edit-pet';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

const api_url = environment.apiUrl;

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {

  sexo: Array<any>;
  postData: any = {};
  editpet: EditPet = new EditPet();
  pets: Array<any>;
  private apiUrl = api_url;

  dataPets: any = {};
  dataRacas: any = {};
  elementData: any = {};
  dataEspecies: any = {};
  dataUsuarios: any = {};
  petsEdit: Array<any>;
  racas: Array<any>;
  especies: Array<any>;
  tamanho: Array<any>;
  idade: Array<any>;

  constructor(private httpClient: HttpClient, private editPet: EditPet, public router: Router,
    private route: ActivatedRoute, public snackBar: MatSnackBar) { }

  id = this.route.snapshot.queryParams['id'];

  async ngOnInit() {

    document.querySelector('#imgupload').addEventListener('change', function() {
      let fotoAnimal;
      let filesSelected = (<HTMLInputElement>document.getElementById('imgupload')).files;
      if (filesSelected.length > 0) {
        let fileToLoad = filesSelected[0];
        let fileReader = new FileReader();
        fileReader.onload = function(fileLoadEvent) {
          let base64value = <FileReader>event.target;
          (<HTMLInputElement>document.getElementById('imgupload')).setAttribute('base64-value', base64value.result);
        };
        fileReader.readAsDataURL(fileToLoad);
      }
    });

    this.sexo = [
      {value: 'Macho', viewValue: 'Macho'},
      {value: 'Femêa', viewValue: 'Femêa'}
    ];

    this.idade = [
      { value: 'Mese(s)', viewValue: 'Mese(s)' },
      { value: 'Ano(s)', viewValue: 'Ano(s)' }
    ];

    this.tamanho = [
      { value: 'Pequeno', viewValue: 'Pequeno' },
      { value: 'Médio', viewValue: 'Médio' },
      { value: 'Grande', viewValue: 'Grande' }
    ];

    await this.getRacas('/api/racas/all');
    await this.getEspecies('/api/especies/all');
    this.getDataPet();

  }


  getRacas(url: string) {
    this.httpClient.get(api_url + url).subscribe(racas => {
      this.dataRacas = racas;
      this.racas = this.dataRacas.payload;
      console.log(this.racas);
    });
  }


  getEspecies(url: string) {
    this.httpClient.get(api_url + url).subscribe(especies => {
      this.dataEspecies = especies;
      this.especies = this.dataEspecies.payload;
      console.log(this.especies);
    });
  }


  getDataPet() {
    this.apiUrl = this.apiUrl + '/api/animals/' + this.id ;
    const userToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', userToken);

    this.httpClient.get(this.apiUrl, { headers }).subscribe( pets => {
      this.dataPets = pets;
      this.editPet = this.dataPets.payload;

      });
  }


  goTo(route: string) {
    this.router.navigate([route]);
  }


  updatePet(URL) {
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
          this.goTo('meus-pets');
        },
        err => {
          this.snackBar.open('Erro ao Editar Pet', 'OK', {
            duration: 2000,
          });
          this.goTo('meus-pets');
        }
      );
  }

}
