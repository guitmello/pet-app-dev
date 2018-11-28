import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { Pet } from '../pet.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pet-info',
  templateUrl: './pet-info.component.html',
  styleUrls: ['./pet-info.component.scss']
})
export class PetInfoComponent implements OnInit {

  pet: Pet;
  races: Pet[] = [];
  species: Pet[] = [];

  constructor(
    private petService: PetService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.getPet(params.id);
      }
    });
  }

  getPet(id: number) {
    this.petService.getPet(id)
      .subscribe(response => {
        this.pet = response;
      });
  }

}
