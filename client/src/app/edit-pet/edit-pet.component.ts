import { Component, OnInit } from '@angular/core';
import { EditPet } from './edit-pet';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

const api_url = environment.apiUrl;

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {

  postData: any = {};
  editpet: EditPet = new EditPet();
  private apiUrl = api_url;

  constructor(private httpClient: HttpClient, private editPet: EditPet, private route: ActivatedRoute) {
    this.updatePet(this.route.snapshot.queryParams['id']);
   }

  ngOnInit() {
  }

  updatePet(id) {
    this.apiUrl = this.apiUrl + '/api/animals/' + id + '/update';
    const userToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', userToken);
    console.log(headers);

    this.postData = {
      nm_animal: this.editPet.nome,
      cd_idade_animal: this.editPet.idade,
      nm_cor_animal: this.editPet.cor,
      nm_sexo_animal: this.editPet.sexo,
      nm_tamanho_animal: this.editPet.tamanho,
      ic_deficiencia_animal: this.editPet.deficiencia,
      ds_deficiencia_animal: this.editPet.ds_deficiencia,
      ds_foto_animal: null,
      cd_raca_fk: this.editPet.id_raca,
      cd_usuario_fk: localStorage.getItem('id'),
      cd_especie_fk: this.editPet.id_especie
    };

    this.httpClient.post<EditPet>(this.apiUrl, this.postData, { headers })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }

}
