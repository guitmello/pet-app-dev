import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-add-edit',
  templateUrl: './pet-add-edit.component.html',
  styleUrls: ['./pet-add-edit.component.scss']
})
export class PetAddEditComponent implements OnInit {

  petForm: FormGroup;

  genderArray: Array<Object> = [
    { value: 'Macho', viewValue: 'Macho' },
    { value: 'Fêmea', viewValue: 'Fêmea' }
  ];

  ageArray: Array<Object> = [
    { value: 'Mes(es)', viewValue: 'Mes(es)' },
    { value: 'Ano(s)', viewValue: 'Ano(s)' }
  ];

  sizeArray: Array<Object> = [
    { value: 'Pequeno', viewValue: 'Pequeno' },
    { value: 'Médio', viewValue: 'Médio' },
    { value: 'Grande', viewValue: 'Grande' }
  ];

  specieArray: Array<Object> = [];
  raceArray: Array<Object> = [];

  constructor(private petService: PetService) { }

  ngOnInit() {
    this.petForm = new FormGroup({
      nm_animal: new FormControl('', {
        validators: [Validators.required, Validators.minLength(10)]
      }),
      cd_idade_animal: new FormControl('', {
        validators: [Validators.required, Validators.maxLength(2)]
      }),
      nm_idade_animal: new FormControl('', {
        validators: [Validators.required]
      }),
      nm_sexo_animal: new FormControl('', {
        validators: [Validators.required]
      }),
      nm_tamanho_animal: new FormControl('', {
        validators: [Validators.required]
      }),
      nm_cor_animal: new FormControl('', {
        validators: [Validators.required]
      }),
      nm_especie_animal: new FormControl('', {
        validators: [Validators.required]
      }),
      nm_raca_animal: new FormControl('', {
        validators: [Validators.required]
      })
    });

    this.fillEspecie();
  }

  fillEspecie() {
    this.petService.getSpecies().subscribe(species => this.specieArray = species);
  }

  fillRacas() {
    this.petService.getRaces().subscribe(races => this.raceArray = races);
  }

}
