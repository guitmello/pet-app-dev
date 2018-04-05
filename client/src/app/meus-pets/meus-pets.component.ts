import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

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
      { id: 3, nm_animal: 'Pie', cd_idade_animal: '3 anos', nm_raca_animal: 'Desconhecida',
      ds_foto_animal: '../../assets/images/ft-pet.jpg', nm_usuario_fk: 'Junior' },
      { id: 4, nm_animal: 'Sapeca', cd_idade_animal: '7 anos', nm_raca_animal: 'Pincher',
      ds_foto_animal: '../../assets/images/ft-pet.jpg', nm_usuario_fk: 'João' },
      { id: 5, nm_animal: 'Salazar', cd_idade_animal: '9 anos', nm_raca_animal: 'Vira-Lata',
      ds_foto_animal: '../../assets/images/ft-pet.jpg', nm_usuario_fk: 'José' },
      { id: 6, nm_animal: 'Jr', cd_idade_animal: '5 anos', nm_raca_animal: 'Pincher',
      ds_foto_animal: '../../assets/images/ft-pet.jpg', nm_usuario_fk: 'Maria' },
    ];
  }

}
