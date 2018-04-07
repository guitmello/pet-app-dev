import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  listOfFavoritePets: Array<any>;
  
  constructor(
    public router: Router
  ) {}

  ngOnInit() {
    this.getFavoritePets();
  }

  moreInfo(id: string){
    this.router.navigate([`pet-info`]);
  }

  getFavoritePets(){
    this.listOfFavoritePets = [
      {id: 7, name: 'DogGuilherme5', city: 'São Vicente', state: 'SP', street: 'Rua Esquina 3', breed: 'Poodle ', date: '02/01/2017', title: 'Cão feio6'},
    ];
  }

}
