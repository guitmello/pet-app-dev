import { Component, OnInit } from '@angular/core';
import { PFisica } from './p-fisica';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';

const api_url = environment.apiUrl;

@Component({
  selector: 'app-add-pfisica',
  templateUrl: './add-pfisica.component.html',
  styleUrls: ['./add-pfisica.component.css']
})
export class AddPfisicaComponent implements OnInit {

  filtredStates: any = {};
  filtredCities: Array<any>;
  citiesArrays: any = {};
  json: any = {};
  sexoArray: Array<any>;
  data: any = {};
  postData: any = {};
  public cpfMask: Array<string | RegExp>;
  public celMask: Array<string | RegExp>;
  public cepMask: Array<string | RegExp>;
  public numMask: Array<string | RegExp>;

  auxState: boolean
  auxCity: boolean

  cityStates: any = {};
  pfisica: PFisica = new PFisica();
  private apiUrl = api_url + '/api/users/create';
  private api_urlCityState = api_url + '/api/citystate';

  mostrarLoading: boolean = false;
  mostrarLoadingEmmiter = new EventEmitter<boolean>();

  nome = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  cpf = new FormControl('', [Validators.required, Validators.minLength(11)]);
  telefone = new FormControl('', [Validators.required]);
  sexo = new FormControl('', [Validators.required]);
  cep = new FormControl('', [Validators.required, Validators.minLength(8)]);
  estado = new FormControl('', [Validators.required]);
  cidade = new FormControl('', [Validators.required]);
  endereco = new FormControl('', [Validators.required]);
  numero = new FormControl('', [Validators.required]);
  completo = new FormControl('', [Validators.required]);
  senha = new FormControl('', [Validators.required]);

  getNomeErrorMessage() {
    return this.nome.hasError('required') ? 'Você deve preencher seu nome' : '';
  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'Preencha seu email' :
      this.email.hasError('email') ? 'Email incorreto' :
        '';
  }

  getCpfErrorMessage() {
    return this.cpf.hasError('required') ? 'Preencha seu cpf' :
      this.cpf.hasError('minlength') ? 'Preencha o cpf corretamente' :
        '';
  }

  getTelefoneErrorMessage() {
    return this.telefone.hasError('required') ? 'Preencha seu telefone' : '';
  }

  getSexoErrorMessage() {
    return this.sexo.hasError('required') ? 'Preencha seu sexo' : '';
  }

  getCepErrorMessage() {
    return this.cep.hasError('required') ? 'Preencha seu cep' :
      this.cep.hasError('minlength') ? 'Preencha o cep corretamente' :
        '';
  }

  getEstadoErrorMessage() {
    return this.estado.hasError('required') ? 'Preencha seu estado' : '';
  }

  getCidadeErrorMessage() {
    return this.cidade.hasError('required') ? 'Preencha seu cidade' : '';
  }

  getEnderecoErrorMessage() {
    return this.endereco.hasError('required') ? 'Preencha seu endereço' : '';
  }

  getNumeroErrorMessage() {
    return this.numero.hasError('required') ? 'Preencha seu numero' : '';
  }

  getSenhaErrorMessage() {
    return this.senha.hasError('required') ? 'Preencha sua senha' : '';
  }

  constructor(private httpClient: HttpClient, public router: Router, public snackBar: MatSnackBar, private appComponent: AppComponent) {
    this.cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
    this.celMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    this.cepMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
    this.numMask = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/];
  }

  getCityState() {
    this.appComponent.mostrarLoadingEmmiter.emit(true);

    this.filtredStates = [];
    this.httpClient.get(this.api_urlCityState).subscribe(jsonStates => {
      this.json = jsonStates;
      this.cityStates = this.json.estados;
      this.cityStates.forEach(state => {
        this.filtredStates.push(state.sigla);
      });

      this.appComponent.mostrarLoadingEmmiter.emit(false);
    });
  }

  ngOnInit() {
    this.appComponent.mostrarLoadingEmmiter.subscribe(
      mostrarSpinner => this.mostrarLoading = mostrarSpinner,
    );

    this.getCityState();
    this.sexoArray = [
      { value: 'Masculino', viewValue: 'Masculino' },
      { value: 'Feminino', viewValue: 'Feminino' }
    ];
  }

  goTo(route: string) {
    this.router.navigate([route]);
  }

  blurInStates() {
    if (!!this.pfisica.estado) {
      console.log(this.pfisica.estado);
      this.fillCitiesFromStates();
    }
  }

  emptyInput() {
    if (this.pfisica.estado == '') {
      this.getCityState();
    }
  }

  fillFiltredStates() {
    if (!!this.pfisica.estado) {
      this.fillCitiesFromStates();
    }
  }

  fillCitiesFromStates() {
    this.appComponent.mostrarLoadingEmmiter.emit(true);

    this.filtredStates = [];
    this.citiesArrays = [];
    this.filtredCities = [];
    this.cityStates.forEach(state => {
      if (this.pfisica.estado.toLowerCase() === state.sigla.slice(0, this.pfisica.estado.length).toLowerCase()) {
        this.filtredStates.push(state.sigla);
        this.citiesArrays.push(state.cidades);
      }
    });
    this.citiesArrays.forEach(element => {
      element.forEach(element2 => {
        this.filtredCities.push(element2);
      });

      this.appComponent.mostrarLoadingEmmiter.emit(false);
    });
  }

  fillFiltredCities() {
    this.appComponent.mostrarLoadingEmmiter.emit(true);

    this.filtredCities = [];
    if (!!this.pfisica.cidade) {
      this.citiesArrays.forEach(cities => {
        cities.forEach(city => {
          if (this.pfisica.cidade.toLowerCase() === city.slice(0, this.pfisica.cidade.length).toLowerCase()) {
            this.filtredCities.push(city);
          }
        });

        this.appComponent.mostrarLoadingEmmiter.emit(false);
      });
    }
  }

  registerPf() {
    this.appComponent.mostrarLoadingEmmiter.emit(true);

    this.auxState = false;
    this.auxCity = false;
    if (!!this.cityStates) {
      this.searchStateAndCity();
      if (!this.auxState) {
        document.getElementById("estado").focus();
        this.snackBar.open('Estado não encontrado', 'OK', {
          duration: 2000,
        });
      } else if (this.auxState && !this.auxCity) {
        document.getElementById("cidade").focus();
        this.snackBar.open('Cidade não encontrada', 'OK', {
          duration: 2000,
        });

        this.appComponent.mostrarLoadingEmmiter.emit(false);
      } else if (this.auxState && this.auxCity) {
        this.submit()
      }
    }
  }

  searchStateAndCity() {
    this.appComponent.mostrarLoadingEmmiter.emit(true);

    this.cityStates.forEach(state => {
      if (this.pfisica.estado.toLowerCase() === state.sigla.toLowerCase() && this.auxState == false) {
        this.auxState = true;
        if (!!this.citiesArrays) {
          this.citiesArrays.forEach(cities => {
            cities.forEach(city => {
              if (this.pfisica.cidade.toLowerCase() === city.toLowerCase() && this.auxCity == false) {
                this.auxCity = true;
              }
            });

            this.appComponent.mostrarLoadingEmmiter.emit(false);
          });
        }
      }
    });
  }

  submit() {
    this.appComponent.mostrarLoadingEmmiter.emit(true);

    this.removeMasks();
    this.postData = {
      nm_email_usuario: this.pfisica.email,
      cd_senha_usuario: this.pfisica.senha,
      nm_tipo_usuario: 'Pessoa Física',
      cd_cpf_usuario: this.pfisica.cpf,
      nm_usuario: this.pfisica.nome,
      nm_sexo_usuario: this.pfisica.sexo,
      dt_nascimento_usuario: this.pfisica.data,
      cd_telefone_usuario: this.pfisica.telefone,
      cd_cep_usuario: this.pfisica.cep,
      nm_estado_usuario: this.pfisica.estado,
      nm_cidade_usuario: this.pfisica.cidade,
      nm_endereco_usuario: this.pfisica.endereco,
      cd_ip_usuario: null,
      cd_numero_endereco_usuario: this.pfisica.numero,
      ds_complemento_endereco_usuario: this.pfisica.complemento,
      ds_foto_usuario: null
    };
    return this.httpClient.post<PFisica>(this.apiUrl, this.postData)
      .subscribe(res => {
        console.log(res);
        this.snackBar.open('Usuário Cadastrado com Sucesso!', 'OK', {
          duration: 2000,
        });
        this.appComponent.mostrarLoadingEmmiter.emit(false);
        this.goTo('login');
      },
        err => {
          this.snackBar.open('Erro ao Cadastrar Usuário', 'OK', {
            duration: 2000,
          });
          this.appComponent.mostrarLoadingEmmiter.emit(false);
        }
      );
  }

  removeMasks() {
    this.removeCpfMask();
    this.removeCelMask();
    this.removeCepMask();
    this.removeNumeroMask();
  }

  removeNumeroMask() {
    let numberHome = this.pfisica.numero.toString();
    let beforeNumberH = numberHome;
    for (let x = 0; x <= beforeNumberH.length; x++) {
      if (!parseInt(numberHome.slice(x, x + 1))) {
        numberHome.replace('_', '');
      }
    }
    this.pfisica.numero = parseInt(numberHome);
  }

  removeCpfMask() {
    const cpf = this.pfisica.cpf.toString();
    let beforeCpf = cpf.replace('.', '');
    beforeCpf = beforeCpf.replace('.', '');
    beforeCpf = beforeCpf.replace('-', '');
    this.pfisica.cpf = parseInt(beforeCpf);
  }

  removeCelMask() {
    const cel = this.pfisica.telefone.toString();
    let beforeCel = cel.replace('(', '');
    beforeCel = beforeCel.replace(')', '');
    beforeCel = beforeCel.replace(' ', '');
    beforeCel = beforeCel.replace('-', '');
    this.pfisica.telefone = parseInt(beforeCel);
  }

  removeCepMask() {
    const cep = this.pfisica.cep.toString();
    let beforeCep = cep.replace('.', '');
    beforeCep = beforeCep.replace('-', '');
    this.pfisica.cep = parseInt(beforeCep);
  }


}
