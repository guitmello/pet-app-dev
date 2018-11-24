import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PetService } from '../pet.service';
import { ActivatedRoute } from '@angular/router';
import { Pet } from '../pet.model';

@Component({
  selector: 'app-pet-add-edit',
  templateUrl: './pet-add-edit.component.html',
  styleUrls: ['./pet-add-edit.component.scss']
})
export class PetAddEditComponent implements OnInit, OnChanges {

  isAdding = true;

  pet: Pet;

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

  constructor(
    private petService: PetService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.petService.getPet(params.id);
        this.isAdding = false;
      }
    });

    this.petForm = new FormGroup({
      nm_animal: new FormControl('', {
        validators: [Validators.required]
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

    this.fillSpecies();
  }

  ngOnChanges() {
    this.changePhoto();
  }

  fillSpecies() {
    this.petService
      .getSpecies()
      .subscribe(species => this.specieArray = species);
  }

  fillRaces(id) {
    console.log('races');
    this.petService.getRaces(id).subscribe(races => {
      this.raceArray = races;
      console.log(this.raceArray);
    });
  }

  changePhoto() {
    document.querySelector('#imgupload').addEventListener('change', function() {
      const filesSelected = (<HTMLInputElement>(
        document.getElementById('imgupload')
      )).files;
      if (filesSelected.length > 0) {
        const fileToLoad = filesSelected[0];
        const fileReader = new FileReader();
        fileReader.onload = function(fileLoadEvent) {
          const base64value = <FileReader>event.target;
          (<HTMLInputElement>document.getElementById('imgupload')).setAttribute(
            'base64-value', base64value.result.toString()
          );
        };
        fileReader.readAsDataURL(fileToLoad);
      }
    });
  }

  petRegister() {
    let fotobase64 = (<HTMLInputElement>document.getElementById('imgupload')).getAttribute('base64-value');

    if (!fotobase64) {
      fotobase64 = '../../assets/images/ft-pet.png';
    }

    if (this.isAdding) {
      this.petService.createPet(this.pet).subscribe(response => {
        console.log(response);
      });
    } else {
      this.petService.editPet(this.pet).subscribe(response => {
        console.log(response);
      });
    }
  }

}
