import { Component, OnInit, EventEmitter } from '@angular/core';
import { EditUsuario } from './edit-usuario';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { AppComponent } from "../app.component";

const api_url = environment.apiUrl;

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.css']
})
export class EditUsuarioComponent implements OnInit {
  private apiUrl = api_url;

  filtredStates: any = {};
  filtredCities: Array<any>;
  citiesArrays: any = {};
  json: any = {};

  auxState: boolean
  auxCity: boolean

  cityStates: any = [];
  private api_urlCityState = api_url + '/api/citystate';

  sexoArray: Array<any>;
  dataUsuarios: any = {};
  postData: any = {};
  editusuario: EditUsuario = new EditUsuario();
  pets: Array<any>;

  public cnpjMask: Array<string | RegExp>;
  public cpfMask: Array<string | RegExp>;
  public celMask: Array<string | RegExp>;
  public cepMask: Array<string | RegExp>;
  public numMask: Array<string | RegExp>;

  tipoJuridicoEmitter = new EventEmitter<boolean>();
  tipoFisicoEmitter = new EventEmitter<boolean>();
  tipoJuridico: boolean = false;
  tipoFisico: boolean = false;

  mostrarLoading: boolean = false;
  mostrarLoadingEmmiter = new EventEmitter<boolean>();

  nome = new FormControl('', [Validators.required]);
  razaoSocial = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  cpf = new FormControl('', [Validators.required, Validators.minLength(11)]);
  cnpj = new FormControl('', [Validators.required, Validators.minLength(13)]);
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

  getRazaoSocialErrorMessage() {
    return this.razaoSocial.hasError('required') ? 'Você deve preencher sua razão social' : '';
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

  getCnpjErrorMessage() {
    return this.cnpj.hasError('required') ? 'Preencha seu cnpj' :
      this.cnpj.hasError('minlength') ? 'Preencha o cnpj corretamente' :
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

  constructor(private httpClient: HttpClient, private editUsuario: EditUsuario, public router: Router,
    private route: ActivatedRoute, public snackBar: MatSnackBar, private appComponent: AppComponent) {
      this.cnpjMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
      this.cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
      this.celMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
      this.cepMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
      this.numMask = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/];
    }

    id = this.route.snapshot.queryParams['id'];

    getCityState() {

      this.filtredStates = [];
      this.httpClient.get(this.api_urlCityState).subscribe(jsonStates => {
        this.json = jsonStates;
        this.cityStates = this.json.estados;
        this.cityStates.forEach(state => {
          this.filtredStates.push(state.sigla);
        });
  
      });
    }

  ngOnInit() {

    this.appComponent.mostrarLoadingEmmiter.subscribe(
      mostrarSpinner => this.mostrarLoading = mostrarSpinner,
    );

    this.sexoArray = [
      {value: 'Masculino', viewValue: 'Masculino'},
      {value: 'Feminino', viewValue: 'Feminino'}
    ];

    this.getDataUsuario();

  }

  getDataUsuario() {

    this.apiUrl = this.apiUrl + '/api/users/' + this.id ;
    const userToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', userToken);

    this.httpClient.get(this.apiUrl, { headers }).subscribe( pets => {
      this.dataUsuarios = pets;
      this.editUsuario = this.dataUsuarios.payload;
      });

      if (this.editUsuario.nm_tipo_usuario === 'Pessoa Física') {
        this.tipoFisicoEmitter.subscribe(
          tipoUsuario => this.tipoFisico = tipoUsuario,
        );
        this.tipoFisicoEmitter.emit(true);
      } else {
        this.tipoJuridicoEmitter.subscribe(
          tipoUsuario => this.tipoJuridico = tipoUsuario,
        );
        this.tipoJuridicoEmitter.emit(true);
      }

  }


  goTo(route: string) {
    this.router.navigate([route]);
  }

  blurInStates() {
    if (!!this.editUsuario.nm_estado_usuario) {
      this.fillCitiesFromStates();
    }
  }

  emptyInput() {
    if (this.editUsuario.nm_estado_usuario == '') {
      this.getCityState();
    }
  }

  fillFiltredStates() {
    if (!!this.editUsuario.nm_estado_usuario) {
      this.fillCitiesFromStates();
    }
  }

  fillCitiesFromStates() {
    console.log(this);
    this.filtredStates = [];
    this.citiesArrays = [];
    this.filtredCities = [];
    this.cityStates.forEach(state => {
      if (this.editUsuario.nm_estado_usuario.toLowerCase() === state.sigla.slice(0, this.editUsuario.nm_estado_usuario.length).toLowerCase()) {
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

  fillFiltredCities() {

    this.filtredCities = [];
    if (!!this.editUsuario.nm_cidade_usuario) {
      this.citiesArrays.forEach(cities => {
        cities.forEach(city => {
          if (this.editUsuario.nm_cidade_usuario.toLowerCase() === city.slice(0, this.editUsuario.nm_cidade_usuario.length).toLowerCase()) {
            this.filtredCities.push(city);
          }
        });

      });
    }
  }

  registerPf() {

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
      } else if (this.auxState && this.auxCity) {
        this.updateUsuarioFisico('/update');
      }
    }
  }

  registerJr() {

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
      } else if (this.auxState && this.auxCity) {
        this.updateUsuarioJuridico('/update');
      }
    }
  }

  searchStateAndCity() {

    this.cityStates.forEach(state => {
      if (this.editUsuario.nm_estado_usuario.toLowerCase() === state.sigla.toLowerCase() && this.auxState == false) {
        this.auxState = true;
        if (!!this.citiesArrays) {
          this.citiesArrays.forEach(cities => {
            cities.forEach(city => {
              if (this.editUsuario.nm_cidade_usuario.toLowerCase() === city.toLowerCase() && this.auxCity == false) {
                this.auxCity = true;
              }
            });
          });
        }
      }
    });
  }

  formIsValidFisico() {
    return !!this.editUsuario.nm_email_usuario &&
      !!this.editUsuario.cd_senha_usuario &&
      !!this.editUsuario.cd_cpf_usuario &&
      !!this.editUsuario.nm_usuario &&
      !!this.editUsuario.nm_sexo_usuario &&
      !!this.editUsuario.cd_telefone_usuario &&
      !!this.editUsuario.cd_cep_usuario &&
      !!this.editUsuario.nm_estado_usuario &&
      !!this.editUsuario.nm_cidade_usuario &&
      !!this.editUsuario.nm_endereco_usuario &&
      !!this.editUsuario.cd_numero_endereco_usuario &&
      !!this.editUsuario.ds_complemento_endereco_usuario
  }

  updateUsuarioFisico(URL) {

    //if (this.formIsValidFisico()) {

    this.removeMasksFisico();
    const userToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', userToken);

    this.postData = {
      nm_usuario: this.editUsuario.nm_usuario,
      nm_email_usuario: this.editUsuario.nm_email_usuario,
      cd_cpf_usuario: this.editUsuario.cd_cpf_usuario,
      nm_sexo_usuario: this.editUsuario.nm_sexo_usuario,
      cd_telefone_usuario: this.editUsuario.cd_telefone_usuario,
      cd_cep_usuario: this.editUsuario.cd_cep_usuario,
      nm_estado_usuario: this.editUsuario.nm_estado_usuario,
      nm_cidade_usuario: this.editUsuario.nm_cidade_usuario,
      nm_endereco_usuario: this.editUsuario.nm_endereco_usuario,
      cd_numero_endereco_usuario: this.editUsuario.cd_numero_endereco_usuario,
      ds_complemento_endereco_usuario: this.editUsuario.ds_complemento_endereco_usuario,
      cd_senha_usuario: this.editUsuario.cd_senha_usuario,
    };

    this.httpClient.put<EditUsuario>(this.apiUrl + URL, this.postData, { headers })
      .subscribe(
        res => {
          this.snackBar.open('Usuário Editado com Sucesso!', 'OK', {
            duration: 2000,
          });
          this.goTo('home');
        },
        err => {
          this.snackBar.open('Erro ao Editar o Usuário', 'OK', {
            duration: 2000,
          });
          this.goTo('home');
        }
      );
    /*} else {
      this.snackBar.open('Formulário preenchido incorretamente', 'OK', {
        duration: 2000,
      });
    }*/
  }

  formIsValidJuridico() {
    return !!this.editUsuario.nm_email_usuario &&
      !!this.editUsuario.cd_senha_usuario &&
      !!this.editUsuario.cd_cnpj_usuario &&
      !!this.editUsuario.nm_razao_social_usuario &&
      !!this.editUsuario.cd_telefone_usuario &&
      !!this.editUsuario.cd_cep_usuario &&
      !!this.editUsuario.nm_estado_usuario &&
      !!this.editUsuario.nm_cidade_usuario &&
      !!this.editUsuario.nm_endereco_usuario &&
      !!this.editUsuario.cd_numero_endereco_usuario &&
      !!this.editUsuario.ds_complemento_endereco_usuario
  }

  updateUsuarioJuridico(URL) {

    //if (this.formIsValidJuridico()) {

    this.removeMasksJuridico();
    const userToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', userToken);

    this.postData = {
      nm_razao_social_usuario: this.editUsuario.nm_razao_social_usuario,
      nm_email_usuario: this.editUsuario.nm_email_usuario,
      cd_cnpj_usuario: this.editUsuario.cd_cnpj_usuario,
      cd_telefone_usuario: this.editUsuario.cd_telefone_usuario,
      cd_cep_usuario: this.editUsuario.cd_cep_usuario,
      nm_estado_usuario: this.editUsuario.nm_estado_usuario,
      nm_cidade_usuario: this.editUsuario.nm_cidade_usuario,
      nm_endereco_usuario: this.editUsuario.nm_endereco_usuario,
      cd_numero_endereco_usuario: this.editUsuario.cd_numero_endereco_usuario,
      ds_complemento_endereco_usuario: this.editUsuario.ds_complemento_endereco_usuario,
      cd_senha_usuario: this.editUsuario.cd_senha_usuario
    };

    this.httpClient.put<EditUsuario>(this.apiUrl + URL, this.postData, { headers })
      .subscribe(
        res => {
          this.snackBar.open('Usuário Editado com Sucesso!', 'OK', {
            duration: 2000,
          });
          this.goTo('meus-pets');
        },
        err => {
          this.snackBar.open('Erro ao Editar o Usuário', 'OK', {
            duration: 2000,
          });
          this.goTo('home');
        }
      );
    /*} else {
      this.snackBar.open('Formulário preenchido incorretamente', 'OK', {
        duration: 2000,
      });
    }*/
  }

  removeMasksFisico() {
    this.removeCpfMask();
    this.removeCelMask();
    this.removeCepMask();
    this.removeNumeroMask();
  }

  removeMasksJuridico() {
    this.removeCnpjMask();
    this.removeCelMask();
    this.removeCepMask();
    this.removeNumeroMask();
  }

  removeNumeroMask() {
    let numberHome = this.editUsuario.cd_numero_endereco_usuario.toString();
    let beforeNumberH = numberHome;
    for(let x = 0 ; x<=beforeNumberH.length; x++){
      if(!parseInt(numberHome.slice(x,x+1))){
        numberHome.replace('_', '');
      }
    }
    this.editUsuario.cd_numero_endereco_usuario = parseInt(numberHome);
  }

  removeCpfMask() {
    const cpf = this.editUsuario.cd_cpf_usuario.toString();
    let beforeCpf = cpf.replace('.', '');
    beforeCpf = beforeCpf.replace('.', '');
    beforeCpf = beforeCpf.replace('-', '');
    this.editUsuario.cd_cpf_usuario = parseInt(beforeCpf);
  }

  removeCelMask() {
    const cel = this.editUsuario.cd_telefone_usuario.toString();
    let beforeCel = cel.replace('(', '');
    beforeCel = beforeCel.replace(')', '');
    beforeCel = beforeCel.replace(' ', '');
    beforeCel = beforeCel.replace('-', '');
    this.editUsuario.cd_telefone_usuario = parseInt(beforeCel);
  }

  removeCepMask() {
    const cep = this.editUsuario.cd_cep_usuario.toString();
    let beforeCep = cep.replace('.', '');
    beforeCep = beforeCep.replace('-', '');
    this.editUsuario.cd_cep_usuario = parseInt(beforeCep);
  }

  removeCnpjMask() {
    const cnpj = this.editUsuario.cd_cnpj_usuario.toString();
    let beforeCnpj = cnpj.replace('.', '');
    beforeCnpj = beforeCnpj.replace('.', '');
    beforeCnpj = beforeCnpj.replace('/', '');
    beforeCnpj = beforeCnpj.replace('-', '');
    this.editUsuario.cd_cnpj_usuario = parseInt(beforeCnpj);
  }

}
