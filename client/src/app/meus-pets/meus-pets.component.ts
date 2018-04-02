import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meus-pets',
  templateUrl: './meus-pets.component.html',
  styleUrls: ['./meus-pets.component.css']
})
export class MeusPetsComponent implements OnInit {

  meusPets: Array<any>;


  constructor() { }

  ngOnInit() {
    this.getMeusPets();
  }

  getMeusPets() {
    this.meusPets = [
      { id: 1, nm_animal: 'Teddy', cd_idade_animal: '2 anos', nm_raca_animal: 'Chow Chow',
      ds_foto_animal: '../../assets/images/ft-pet.jpg', nm_usuario_fk: 'Alberto' },
      { id: 2, nm_animal: 'Pit', cd_idade_animal: '4 anos', nm_raca_animal: 'Pincher',
      ds_foto_animal: '../../assets/images/ft-pet.jpg', nm_usuario_fk: 'Pedro' },
    ];
  }

}
