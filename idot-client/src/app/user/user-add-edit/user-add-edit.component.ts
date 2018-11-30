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
  pPhysical: User;
  pLegal: User;

  filtredStates: any = {};
  states: [State];
  filtredCities: Array<any>;
  citiesArrays: any = {};

  user: User = new User();
  userType: string;

  userFormPhysical: FormGroup;
  userFormLegal: FormGroup;

  hide = true;
  hideConfirm = true;

  cpfMask: Array<string | RegExp>;
  celMask: Array<string | RegExp>;
  cepMask: Array<string | RegExp>;
  numMask: Array<string | RegExp>;

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
  ) {
    this.cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
    this.celMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    this.cepMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
    this.numMask = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/];
  }

  ngOnInit() {
    this.pPhysical = new User;
    this.pLegal = new User;

    if (this.activatedRoute.snapshot.routeConfig.path === 'usuario-fisico') {
      this.userType = 'pf';
    } else {
      this.userType = 'pj';
    }

    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.userService.getUserId().subscribe(userId => {
          if (params.id === userId) {
            console.log('Param ', params.id);
            console.log('UserId ', userId);
            this.userService.getUser(params.id);
            this.isAdding = false;
          } else {
            console.log('saiu');
            this.router.navigateByUrl('home');
          }
        });
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
    this.removeMasks();
    console.log(this.user);
    // let fotobase64 = (<HTMLInputElement>document.getElementById('imgupload')).getAttribute('base64-value');

    // if (!fotobase64) {
    //   fotobase64 = '../../../assets/images/ft-user.png';
    // }

    // if (this.isAdding) {
    //   this.userService.createUser(this.user).subscribe(response => {
    //     console.log(response);
    //   });
    // } else {
    //   this.userService.editUser(this.user).subscribe(response => {
    //     console.log(response);
    //   });
    // }
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

  fillFiltredCities() {
    this.filtredCities = [];
    if (!!this.user.nm_cidade_usuario) {
      this.citiesArrays.forEach(cities => {
        cities.forEach(city => {
          if (this.user.nm_cidade_usuario.toLowerCase() === city.slice(0, this.user.nm_cidade_usuario.length).toLowerCase()) {
            this.filtredCities.push(city);
          }
        });

      });
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
    if (!this.user.nm_estado_usuario) {
      this.getCityState();
    }
  }


  removeMasks() {
    this.removeCpfMask();
    this.removeCelMask();
    this.removeCepMask();
    this.removeNumeroMask();
  }


  removeNumeroMask() {
    const numberHome = this.user.cd_numero_endereco_usuario.toString();
    const beforeNumberH = numberHome;
    for (let x = 0; x <= beforeNumberH.length; x++) {
      if (!parseInt(numberHome.slice(x, x + 1))) {
        numberHome.replace('_', '');
      }
    }
    this.user.cd_numero_endereco_usuario = parseInt(numberHome);
  }

  removeCpfMask() {
    const cpf = this.user.cd_cpf_usuario.toString();
    let beforeCpf = cpf.replace('.', '');
    beforeCpf = beforeCpf.replace('.', '');
    beforeCpf = beforeCpf.replace('-', '');
    this.user.cd_cpf_usuario = parseInt(beforeCpf);
  }

  removeCelMask() {
    const cel = this.user.cd_telefone_usuario.toString();
    let beforeCel = cel.replace('(', '');
    beforeCel = beforeCel.replace(')', '');
    beforeCel = beforeCel.replace(' ', '');
    beforeCel = beforeCel.replace('-', '');
    this.user.cd_telefone_usuario = parseInt(beforeCel);
  }

  removeCepMask() {
    const cep = this.user.cd_cep_usuario.toString();
    let beforeCep = cep.replace('.', '');
    beforeCep = beforeCep.replace('-', '');
    this.user.cd_cep_usuario = parseInt(beforeCep);
  }
}
