import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listOfPets: Array<any>;

  constructor() { }

  ngOnInit() {
    this.getPets();
  }


  teste(id: string){
    alert(id);
  }

  getPets(){
    this.listOfPets = [
      {id: 1, name: 'DogMau', city: 'São Vicente', state: 'SP', street: 'rua esquian8', breed: 'Vira Lata', date: '28/08/2017', title: 'Cão feio'},
      {id: 2, name: 'DogGuilherme', city: 'Praia Grande', state: 'SP', street: 'rua esquia7n', breed: 'Gay', date: '21/03/2017', title: 'Cão feio2'},
      {id: 3, name: 'DogArturLoko', city: 'Vicente de Caralho', state: 'SP', street: 'rua esquian6', breed: 'Homossexual', date: '18/08/2017', title: 'Cão feio1'},
      {id: 4, name: 'DogFelipHinode', city: 'Santus', state: 'SP', street: 'rua esquian5', breed: 'daAbunda', date: '26/08/2017', title: 'Cão feio3'},
      {id: 5, name: 'DogGuilherme2', city: 'Long Beach', state: 'SP', street: 'rua esquian4', breed: 'Labrador', date: '29/05/2017', title: 'Cão feio1'},
      {id: 6, name: 'DogGuilherme3', city: 'Saints', state: 'SP', street: 'rua esquian2', breed: 'Não identificado', date: '15/02/2017', title: 'Cão feio7'},
      {id: 7, name: 'DogGuilherme5', city: 'teu cu', state: 'SP', street: 'rua esquian3', breed: 'Poodle ', date: '02/01/2017', title: 'Cão feio6'},
    ];
  }
}
