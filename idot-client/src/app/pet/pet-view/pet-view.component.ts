import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { Pet } from '../pet.model';

@Component({
  selector: 'app-pet-view',
  templateUrl: './pet-view.component.html',
  styleUrls: ['./pet-view.component.scss']
})
export class PetViewComponent implements OnInit {

  pets: Pet[] = [];

  constructor(private petService: PetService) { }

  ngOnInit() {
    this.petService.getAllPets()
      .subscribe(response => this.pets = response);

  }

}
