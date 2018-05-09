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

  constructor(private httpClient: HttpClient, private editPet: EditPet, public router: Router,
    private route: ActivatedRoute, public snackBar: MatSnackBar) { }

  id = this.route.snapshot.queryParams['id'];

  async ngOnInit() {

    this.sexo = [
      {value: 'M', viewValue: 'Macho'},
      {value: 'F', viewValue: 'Femêa'}
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
      console.log(this.editPet);

        for (let x = 0; x <= this.racas.length - 1; x++) {
          if ( this.editPet.cd_raca_fk === this.racas[x].id_raca ) {
            this.editPet.nm_raca_animal = this.racas[x].nm_raca;
          }
        }

        for (let y = 0; y <= this.especies.length - 1; y++) {
          if (this.editPet.cd_especie_fk === this.especies[y].id_especie) {
            this.editPet.nm_especie_animal = this.especies[y].nm_especie;
          }
        }
      });
  }

  goTo(route: string) {
    this.router.navigate([route]);
  }

  updatePet(URL) {
    const userToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', userToken);

    this.postData = {
      nm_animal: this.editPet.nm_animal,
      cd_idade_animal: this.editPet.cd_idade_animal,
      nm_cor_animal: this.editPet.nm_cor_animal,
      nm_sexo_animal: this.editPet.nm_sexo_animal,
      nm_tamanho_animal: this.editPet.nm_tamanho_animal,
      ic_deficiencia_animal: this.editPet.ic_deficiencia_animal,
      ds_deficiencia_animal: this.editPet.ds_deficiencia_animal,
      ds_foto_animal: '../../assets/images/ft-pet.jpg',
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
