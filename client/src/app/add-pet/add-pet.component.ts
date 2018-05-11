import { Component, OnInit } from '@angular/core';
import { Pet } from './pet';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

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
  tamanho: Array<any>;
  private apiUrl = api_url;

  pet: Pet = new Pet();

  constructor(private httpClient: HttpClient, public router: Router, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.pet.deficiencia = false;

    this.sexo = [
      { value: 'M', viewValue: 'Macho' },
      { value: 'F', viewValue: 'Fêmea' }
    ];

    this.tamanho = [
      { value: 'Pequeno', viewValue: 'Pequeno' },
      { value: 'Médio', viewValue: 'Médio' },
      { value: 'Grande', viewValue: 'Grande' }
    ];

    this.especie = [
      { id: 1, value: 'Cachorro' },
      { id: 2, value: 'Gato' },
      { id: 3, value: 'Coelho' },
      { id: 4, value: 'Hamster' },
      { id: 5, value: 'Pássaro' },
      { id: 5, value: 'Cavalo' }
    ];

    this.raca = [
      { id: 1, value: 'Pincher' },
      { id: 2, value: 'Pastor Alemão' },
      { id: 3, value: 'Siamês' },
    ];
  }

  goTo(route: string) {
    this.router.navigate([route]);
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
      ds_foto_animal: '../../assets/images/ft-pet.jpg',
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
          this.goTo('home');
        },
        err => {
          this.snackBar.open('Erro ao Cadastrar Pet', 'OK', {
            duration: 2000,
          });
          this.goTo('home');
        }
      );
  }


}
