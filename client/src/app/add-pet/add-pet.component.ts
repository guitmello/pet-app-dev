import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {

  sexo: Array<any>;
  especie: Array<any>;
  raca: Array<any>;

  constructor() { }

  ngOnInit() {
    this.sexo = [
      {value: 'Masculino', viewValue: 'Masculino'},
      {value: 'Feminino', viewValue: 'Feminino'}
    ];

    this.especie = [
      {value: 'Espécie 1', viewValue: 'Espécie 1'},
      {value: 'Espécie 2', viewValue: 'Espécie 2'},
      {value: 'Espécie 3', viewValue: 'Espécie 3'},
      {value: 'Espécie 4', viewValue: 'Espécie 4'},
      {value: 'Espécie 5', viewValue: 'Espécie 5'}
    ];

    this.raca = [
      {value: 'Raça 1', viewValue: 'Raça 1'},
      {value: 'Raça 2', viewValue: 'Raça 2'},
      {value: 'Raça 3', viewValue: 'Raça 3'},
      {value: 'Raça 4', viewValue: 'Raça 4'}
    ];
  }

}
