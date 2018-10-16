import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { Pet } from '../pet.model';

@Component({
  selector: 'app-pet-my-list',
  templateUrl: './pet-my-list.component.html',
  styleUrls: ['./pet-my-list.component.scss']
})
export class PetMyListComponent implements OnInit {

  pets: Pet[] = [];
  races: Pet[] = [];
  species: Pet[] = [];

  constructor(private petService: PetService) { }

  ngOnInit() {
    const userId = parseInt(localStorage.getItem('id'), 0);
    this.getMyPets(userId);
    // this.getRaces();
    // this.getSpecies();
  }

  getMyPets(id: number) {
    this.petService.getMyPets(id)
      .subscribe(response => {
        this.pets = response;
      });
  }

  // getRaces() {
  //   this.petService.getRaces()
  //     .subscribe(response => {
  //       this.races = response;
  //     });
  // }

  // getSpecies() {
  //   this.petService.getSpecies()
  //     .subscribe(response => {
  //       this.species = response;
  //     });
  // }
}
