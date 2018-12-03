import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PetService } from '../pet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../pet.model';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-pet-add-edit',
  templateUrl: './pet-add-edit.component.html',
  styleUrls: ['./pet-add-edit.component.scss']
})
export class PetAddEditComponent implements OnInit {

  isAdding = true;

  pet: Pet = new Pet();

  userId: number;

  petForm: FormGroup;

  fotobase64: string;

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
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.petService.getPet(params.id).subscribe(response => {
          this.userId = this.userService.getUserId();
          if (Number(response.payload.cd_usuario_fk) === this.userId) {
            this.petTransform(response);
            this.fotobase64 = this.pet.ds_foto_animal;
          } else {
            this.router.navigateByUrl('/');
          }
        });
        this.isAdding = false;
      } else {
        this.fotobase64 = '../../assets/images/ft-pet.png';
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
      }),
      ic_deficiencia_animal: new FormControl('', { }),
      ds_deficiencia_animal: new FormControl('', { })
    });

    this.fillSpecies();
    this.changePhoto();
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

  changePhoto() {
    document.querySelector('#imgupload').addEventListener('change', function() {
      const filesSelected = (<HTMLInputElement>(
        document.getElementById('imgupload')
      )).files;
      if (filesSelected.length > 0) {
        const fileToLoad = filesSelected[0];
        this.fotobase64 = fileToLoad;
        const fileReader = new FileReader();
        fileReader.onload = function(fileLoadEvent) {
          const base64value = fileReader;
          (<HTMLInputElement>document.getElementById('imgupload')).setAttribute(
            'base64-value', base64value.result.toString()
          );
        };
        fileReader.readAsDataURL(fileToLoad);
      }
    });
  }

  readURL() {
    const input = <HTMLInputElement>(document.getElementById('imgupload'));
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = function(e: any) {
        document.querySelector('#img').setAttribute('src', e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  petRegister() {
    this.fotobase64 = (<HTMLInputElement>document.getElementById('imgupload')).getAttribute('base64-value');
    this.pet.ds_foto_animal = this.fotobase64;
    this.pet.cd_usuario_fk = this.userService.getUserId();

    if (this.isAdding) {
      this.petService.createPet(this.pet).subscribe(response => {
        console.log(response);
        this.router.navigateByUrl('meus-pets');
      });
    } else {
      this.petService.editPet(this.pet).subscribe(response => {
        console.log(response);
        this.router.navigateByUrl('meus-pets');
      });
    }
  }

  petTransform(petPayload: Pet) {
    this.pet.id = petPayload.payload.id;
    this.pet.cd_especie_fk = petPayload.payload.cd_especie_fk;
    this.pet.cd_idade_animal = petPayload.payload.cd_idade_animal;
    this.pet.cd_raca_fk = petPayload.payload.cd_raca_fk;
    this.pet.ds_deficiencia_animal = petPayload.payload.ds_deficiencia_animal;
    this.pet.ds_foto_animal = petPayload.payload.ds_foto_animal;
    this.pet.ic_deficiencia_animal = petPayload.payload.ic_deficiencia_animal;
    this.pet.nm_animal = petPayload.payload.nm_animal;
    this.pet.nm_cor_animal = petPayload.payload.nm_cor_animal;
    this.pet.nm_especie_animal = petPayload.payload.nm_especie_animal;
    this.pet.nm_raca_animal = petPayload.payload.nm_raca_animal;
    this.pet.nm_sexo_animal = petPayload.payload.nm_sexo_animal;
    this.pet.nm_tamanho_animal = petPayload.payload.nm_tamanho_animal;
  }

}
