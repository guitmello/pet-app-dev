import { Component, OnInit } from '@angular/core';
import { Pet } from './pet';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const api_url = environment.apiUrl;

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {

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
      { id: 1, value: 'Espécie 1' },
      { id: 2, value: 'Espécie 2' },
      { id: 3, value: 'Espécie 3' },
      { id: 4, value: 'Espécie 4' },
      { id: 5, value: 'Espécie 5' }
    ];

    this.raca = [
      { id: 1, value: 'Raça 1' },
      { id: 2, value: 'Raça 2' },
      { id: 3, value: 'Raça 3' },
      { id: 4, value: 'Raça 4' }
    ];
  }

  registerPet() {
    this.apiUrl += '/add-pet%3Ftype=sucess';
    return this.httpClient.post<Pet>(this.apiUrl, this.pet)
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
