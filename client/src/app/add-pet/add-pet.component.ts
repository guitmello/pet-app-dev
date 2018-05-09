import { Component, OnInit } from '@angular/core';
import { Pet } from './pet';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

const api_url = environment.apiUrl;

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {

  postData: any = {};

  sexo: Array<any>;
  especie: Array<any>;
  raca: Array<any>;
  private apiUrl = api_url;

  pet: Pet = new Pet();

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.pet.deficiencia = false;

    this.sexo = [
      { value: 'M', viewValue: 'Masculino' },
      { value: 'F', viewValue: 'Feminino' }
    ];

    this.especie = [
      { id: 1, value: 'Cachorro' },
      { id: 2, value: 'Gato' },
      { id: 3, value: 'Coelho' },
      { id: 4, value: 'Hamster' },
      { id: 5, value: 'Passáro' },
      { id: 5, value: 'Cavalo' }
    ];

    this.raca = [
      { id: 1, value: 'Pincher' },
      { id: 2, value: 'Pastor Alemão' },
      { id: 3, value: 'Siamês' },
      { id: 4, value: 'Pit Bull' }
    ];
  }

  registerPet() {
    this.apiUrl = this.apiUrl + '/api/animals/create';
    const userToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', userToken);

    this.postData = {
      nm_animal: this.pet.nome,
      cd_idade_animal: this.pet.idade,
      nm_cor_animal: this.pet.cor,
      nm_sexo_animal: this.pet.sexo,
      nm_tamanho_animal: this.pet.tamanho,
      ic_deficiencia_animal: this.pet.deficiencia,
      ds_deficiencia_animal: this.pet.ds_deficiencia,
      ds_foto_animal: null,
      cd_raca_fk: this.pet.id_raca,
      cd_usuario_fk: localStorage.getItem('id'),
      cd_especie_fk: this.pet.id_especie
    };

    return this.httpClient.post<Pet>(this.apiUrl, this.postData, { headers })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occured');
        }
      );
  }


}
