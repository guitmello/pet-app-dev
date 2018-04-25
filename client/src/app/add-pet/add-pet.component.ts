import { Component, OnInit } from '@angular/core';
import { Pet } from './pet';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {

  sexo: Array<any>;
  especie: Array<any>;
  raca: Array<any>;
  public urlPet: string;

  pet: Pet = new Pet();

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
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
    console.log(this.pet);
    // this.urlPet = 'http://demo5541414.mockable.io/add-pet%3Ftype=sucess';
    // return this.httpClient.post<Pet>(this.urlPet, this.pet)
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //     },
    //     err => {
    //       console.log("Error occured");
    //     }
    //   );
  }


}
