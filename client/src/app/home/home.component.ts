import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listOfPets: Array<any>;

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
    this.getPets();
  }


  moreInfo(id: string) {
    this.router.navigate([`pet-info`]);
  }

  getPets() {
    this.listOfPets = [
      {id: 1, name: 'DogMau', city: 'São Vicente', state: 'SP', street: 'Rua Araucária', breed: 'Vira Lata', date: '28/08/2017', title: 'Vira Lata Perdido'},
      {id: 2, name: 'DogGuilherme', city: 'Praia Grande', state: 'SP', street: 'Rua Engenheiro A.', breed: 'Poodle', date: '21/03/2017', title: 'Cachorro Novo'},
      {id: 3, name: 'DogArturLoko', city: 'São Vicente', state: 'SP', street: 'Avenida Brasil', breed: 'Chow Chow', date: '18/08/2017', title: 'Cão Abandonado'},
      {id: 4, name: 'DogFelipHinode', city: 'Santos', state: 'SP', street: 'Avenida Paulista', breed: 'Poodle', date: '26/08/2017', title: 'Poodle Abandonado'},
      {id: 5, name: 'DogMuriloChocolate', city: 'Santos', state: 'SP', street: 'Rua Bensdorp', breed: 'Chow Chow', date: '29/05/2017', title: 'ChowChow Perdido'},
      {id: 6, name: 'DogAmigoChocolate', city: 'Praia Grande', state: 'SP', street: 'Rua das Flores', breed: 'Não identificado', date: '15/02/2017', title: 'Cão Bebe'},
      {id: 7, name: 'DogPerdido', city: 'São Vicente', state: 'SP', street: 'Avenida Costa e Silva', breed: 'Poodle ', date: '02/01/2017', title: 'Cachorro'},
    ];
  }
}
