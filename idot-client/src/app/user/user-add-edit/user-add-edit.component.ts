import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CityState } from '../cityState.model';
import { State } from '../state.model';

@Component({
  selector: 'app-user-add-edit',
  templateUrl: './user-add-edit.component.html',
  styleUrls: ['./user-add-edit.component.scss']
})
export class UserAddEditComponent implements OnInit {

  isAdding = true;

  filtredStates: any = {};
  states: [State];
  filtredCities: Array<any>;
  citiesArrays: any = {};

  user: User = new User();
  userType: string;
  userId: number;

  userFormPhysical: FormGroup;
  userFormLegal: FormGroup;

  hide = true;
  hideConfirm = true;

  minDate = new Date(1900, 1, 1);
  maxDate = new Date(2000, new Date().getUTCMonth(), new Date().getUTCDate());

  genderArray: Array<Object> = [
    { value: 'Masculino', viewValue: 'Masculino' },
    { value: 'Feminino', viewValue: 'Feminino' }
  ];

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.routeConfig.path);
    if (
      this.activatedRoute.snapshot.routeConfig.path === 'usuario-fisico' ||
      this.activatedRoute.snapshot.routeConfig.path === 'usuario-fisico/:id'
    ) {
      this.userType = 'pf';
    } else if (
      this.activatedRoute.snapshot.routeConfig.path === 'usuario-juridico' ||
      this.activatedRoute.snapshot.routeConfig.path === 'usuario-juridico/:id'
    ) {
      this.userType = 'pj';
    } else {
      this.router.navigateByUrl('/');
    }

    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.userId = this.userService.getUserId();
        if (Number(params.id) === this.userId) {
          this.userService.getUser(params.id).subscribe(response => {
            this.userTransform(response);
          });
          this.isAdding = false;
        } else {
          this.router.navigateByUrl('/');
        }
      }
    });

    // Fisica
    this.userFormPhysical = new FormGroup({
      nm_usuario: new FormControl('', {
        validators: [Validators.required, Validators.minLength(2)]
      }),
      nm_email_usuario: new FormControl('', {
        validators: [Validators.required, Validators.minLength(2), Validators.email]
      }),
      cd_cpf_usuario: new FormControl('', {
        validators: [Validators.required, Validators.minLength(11)]
      }),
      dt_nascimento_usuario: new FormControl('', {
        validators: [Validators.required, Validators.minLength(8)]
      }),
      nm_sexo_usuario: new FormControl('', {
        validators: [Validators.required]
      }),
      cd_telefone_usuario: new FormControl('', {
        validators: [Validators.required]
      }),
      cd_cep_usuario: new FormControl('', {
        validators: [Validators.required, Validators.minLength(8)]
      }),
      nm_estado_usuario: new FormControl('', {
        validators: [Validators.required]
      }),
      nm_cidade_usuario: new FormControl('', {
        validators: [Validators.required]
      }),
      nm_endereco_usuario: new FormControl('', {
        validators: [Validators.required]
      }),
      cd_numero_endereco_usuario: new FormControl('', {
        validators: [Validators.required]
      }),
      ds_complemento_endereco_usuario: new FormControl('', {
        validators: [Validators.required]
      }),
      cd_senha_usuario: new FormControl('', {
        validators: [Validators.required]
      }),
      cd_senha_confirmacao_usuario: new FormControl('', {
        validators: [Validators.required]
      })
    }, { validators: [this.equalsTo], updateOn: 'change' });

    // Juridica
    this.userFormLegal = new FormGroup({
      nm_razao_social_usuario: new FormControl('', {
        validators: [Validators.required, Validators.minLength(2)]
      }),
      nm_email_usuario: new FormControl('', {
        validators: [Validators.required, Validators.minLength(2), Validators.email]
      }),
      cd_cnpj_usuario: new FormControl('', {
        validators: [Validators.required, Validators.minLength(13)]
      }),
      cd_telefone_usuario: new FormControl('', {
        validators: [Validators.required]
      }),
      cd_cep_usuario: new FormControl('', {
        validators: [Validators.required, Validators.minLength(8)]
      }),
      nm_estado_usuario: new FormControl('', {
        validators: [Validators.required]
      }),
      nm_cidade_usuario: new FormControl('', {
        validators: [Validators.required]
      }),
      nm_endereco_usuario: new FormControl('', {
        validators: [Validators.required]
      }),
      cd_numero_endereco_usuario: new FormControl('', {
        validators: [Validators.required]
      }),
      ds_complemento_endereco_usuario: new FormControl('', {
        validators: [Validators.required]
      }),
      cd_senha_usuario: new FormControl('', {
        validators: [Validators.required]
      }),
      cd_senha_confirmacao_usuario: new FormControl('', {
        validators: [Validators.required]
      })
    }, { validators: [this.equalsTo], updateOn: 'change' });

    // this.changePhoto();
    this.getCityState();
  }

  changePhoto() {
    document.querySelector('#imgupload').addEventListener('change', function () {
      const filesSelected = (<HTMLInputElement>(
        document.getElementById('imgupload')
      )).files;
      if (filesSelected.length > 0) {
        const fileToLoad = filesSelected[0];
        const fileReader = new FileReader();
        fileReader.onload = function (fileLoadEvent) {
          const base64value = <FileReader>event.target;
          (<HTMLInputElement>document.getElementById('imgupload')).setAttribute(
            'base64-value', base64value.result.toString()
          );
        };
        fileReader.readAsDataURL(fileToLoad);
      }
    });
  }

  userRegister() {
    let fotobase64 = (<HTMLInputElement>document.getElementById('imgupload')).getAttribute('base64-value');

    if (!fotobase64) {
      fotobase64 = '../../../assets/images/ft-user.png';
    }

    if (this.isAdding) {
      this.userService.createUser(this.user).subscribe(response => {
        console.log(response);
      });
    } else {
      this.userService.editUser(this.user).subscribe(response => {
        console.log(response);
      });
    }
  }

  equalsTo(group: AbstractControl): { [key: string]: boolean } {
    const password = group.get('cd_senha_usuario');
    const passwordConfirm = group.get('passwordConfirm');

    if (!password || !passwordConfirm) {
      return undefined;
    }

    if (password.value !== passwordConfirm.value) {
      return { passwordNotMatch: true };
    } else {
      return undefined;
    }
  }

  getCityState() {
    this.filtredStates = [];
    this.userService.getCitiesStates().subscribe(response => {
      const citiesStates = response;
      this.states = citiesStates.estados;
      this.states.forEach(state => {
        this.filtredStates.push(state.sigla);
      });
    });
  }

  blurInStates() {
    if (!!this.user.nm_estado_usuario) {
      this.fillCitiesFromStates();
    }
  }

  fillFiltredStates() {
    if (!!this.user.nm_estado_usuario) {
      this.fillCitiesFromStates();
    } else {
      this.getCityState();
    }
  }

  fillCitiesFromStates() {

    this.filtredStates = [];
    this.citiesArrays = [];
    this.filtredCities = [];
    this.states.forEach(state => {
      if (this.user.nm_estado_usuario.toLowerCase() === state.sigla.slice(0, this.user.nm_estado_usuario.length).toLowerCase()) {
        this.filtredStates.push(state.sigla);
        this.citiesArrays.push(state.cidades);
      }
    });
    this.citiesArrays.forEach(cities => {
      cities.forEach(city => {
        this.filtredCities.push(city);
      });

    });
  }

  emptyInput() {
    if (this.user.nm_estado_usuario) {
      this.getCityState();
    }
  }

  userTransform(userPayload: User) {
    this.user.cd_cep_usuario = userPayload.payload.cd_cep_usuario;
    this.user.cd_cnpj_usuario = userPayload.payload.cd_cnpj_usuario;
    this.user.cd_cpf_usuario = userPayload.payload.cd_cpf_usuario;
    this.user.cd_numero_endereco_usuario = userPayload.payload.cd_numero_endereco_usuario;
    this.user.cd_senha_usuario = userPayload.payload.cd_senha_usuario;
    this.user.cd_telefone_usuario = userPayload.payload.cd_telefone_usuario;
    this.user.ds_complemento_endereco_usuario = userPayload.payload.ds_complemento_endereco_usuario;
    this.user.ds_foto_usuario = userPayload.payload.ds_foto_usuario;
    this.user.dt_nascimento_usuario = userPayload.payload.dt_nascimento_usuario;
    this.user.id = userPayload.payload.id;
    this.user.nm_cidade_usuario = userPayload.payload.nm_cidade_usuario;
    this.user.nm_email_usuario = userPayload.payload.nm_email_usuario;
    this.user.nm_endereco_usuario = userPayload.payload.nm_endereco_usuario;
    this.user.nm_estado_usuario = userPayload.payload.nm_estado_usuario;
    this.user.nm_razao_social_usuario = userPayload.payload.nm_razao_social_usuario;
    this.user.nm_sexo_usuario = userPayload.payload.nm_sexo_usuario;
    this.user.nm_tipo_usuario = userPayload.payload.nm_tipo_usuario;
    this.user.nm_usuario = userPayload.payload.nm_usuario;
  }
}
