import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PetService } from '../pet/pet.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchFormOng: FormGroup;
  searchFormPet: FormGroup;

  typeFilterOng = false;
  typeFilterPet = false;

  ongName: string;
  specieId: number;
  racaId: number;

  specieArray: Array<Object> = [];
  raceArray: Array<Object> = [];

  constructor(
    private searchService: SearchService,
    private petService: PetService
  ) { }

  ngOnInit() {
    this.searchFormOng = new FormGroup({
      nm_razao_social_usuario: new FormControl('', {
        validators: [Validators.required]
      })
    });

    this.searchFormPet = new FormGroup({
      cd_especie_fk: new FormControl('', {
        validators: [Validators.required]
      }),
      cd_raca_fk: new FormControl('', {
        validators: [Validators.required]
      })
    });

    this.fillSpecies();
  }

  fillSpecies() {
    this.petService
      .getSpecies()
      .subscribe(species => this.specieArray = species);
  }

  fillRaces(id) {
    this.petService.getRaces(id).subscribe(races => {
      this.raceArray = races;
    });
  }

  filterChange(typeFilter) {
    if (typeFilter = 'typeFilterOng') {
      this.typeFilterPet = false;
    } if (typeFilter = 'typeFilterPet') {
      this.typeFilterOng = false;
    }
  }

  search() {
    if (this.typeFilterOng) {
      this.searchService.getOngSearch(this.ongName).subscribe(response => {
        console.log(response);
      });
    } else if (this.typeFilterPet) {
      this.searchService.getPetSearch(this.specieId, this.racaId).subscribe(response => {
        console.log(response);
      });
    }
  }

}
