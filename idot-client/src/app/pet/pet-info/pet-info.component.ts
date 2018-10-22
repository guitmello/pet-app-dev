import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { Pet } from '../pet.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NumberFormatStyle } from '@angular/common';

@Component({
  selector: 'app-pet-info',
  templateUrl: './pet-info.component.html',
  styleUrls: ['./pet-info.component.scss']
})
export class PetInfoComponent implements OnInit {

  idPet: number;
  pet: Pet;
  races: Pet[] = [];
  species: Pet[] = [];

  constructor(
    private petService: PetService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.idPet = params['id'];
    });
  }

  ngOnInit() {
    this.getPet(this.idPet);
  }


  getPet(id: number) {
    this.petService.getPet(id)
      .subscribe(response => {
        this.pet = response;
      });
  }

}
