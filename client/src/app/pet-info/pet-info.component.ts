import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-info',
  templateUrl: './pet-info.component.html',
  styleUrls: ['./pet-info.component.css']
})
export class PetInfoComponent implements OnInit {

  pet: {
    id: any,
    name: any,
    age: any,
    breed: any,
    species: any,
    genre: any,
    color: any,
    size: any,
    city: any,
    state: any,
    street: any,
    title: any
  };

  constructor() { }
  
  ngOnInit() {
    this.pet = {
      'id': '7',
      'name': 'DogGuilherme5',
      'age': '2',
      'breed': 'Poodle',
      'species': 'Cachorro',
      'genre': 'Macho',
      'color': 'Mesclado',
      'size': 'Pequeno',
      'city': 'São Vicente',
      'state': 'SP',
      'street': 'Rua Esquina 3',
      'title': 'Cão feio'
    };
  }

}
