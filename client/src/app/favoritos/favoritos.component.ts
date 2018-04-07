import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  listOfFavoritePets: Array<any>;
  constructor() {}

  ngOnInit() {
    this.getFavoritePets();
  }

  teste(id: string){
    alert(id);
  }

  getFavoritePets(){
    this.listOfFavoritePets = [
      {id: 7, name: 'DogGuilherme5', city: 'teu cu', state: 'SP', street: 'rua esquian3', breed: 'Poodle ', date: '02/01/2017', title: 'Cão feio6'},
    ];
  }

}
