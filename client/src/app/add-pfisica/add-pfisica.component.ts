import { Component, OnInit } from '@angular/core';
import { PFisica } from './p-fisica';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { CityState } from '../city-state';

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
  sexo: Array<any>;
  data: any = {};
  postData: any = {};
  public cpfMask: Array<string | RegExp>;
  public celMask: Array<string | RegExp>;
  public cepMask: Array<string | RegExp>;
  public numMask: Array<string | RegExp>;

  cityStates: any = {};
  pfisica: PFisica = new PFisica();
  private apiUrl = api_url + '/api/users/create';
  private api_urlCityState = api_url + '/api/citystate';

  nome = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  cpf = new FormControl('', [Validators.required]);
  telefone = new FormControl('', [Validators.required]);
  cep = new FormControl('', [Validators.required]);
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
    return this.email.hasError('required') ? 'Você deve preencher seu email' :
      this.email.hasError('email') ? 'Email incorreto' :
        '';
  }

  getCpfErrorMessage() {
    return this.cpf.hasError('required') ? 'Você deve preencher seu cpf' : '';
  }

  getTelefoneErrorMessage() {
    return this.telefone.hasError('required') ? 'Você deve preencher seu telefone' : '';
  }

  getCepErrorMessage() {
    return this.cep.hasError('required') ? 'Você deve preencher seu cep' : '';
  }

  getEstadoErrorMessage() {
    return this.estado.hasError('required') ? 'Você deve preencher seu estado' : '';
  }

  getCidadeErrorMessage() {
    return this.cidade.hasError('required') ? 'Você deve preencher seu cidade' : '';
  }

  getEnderecoErrorMessage() {
    return this.endereco.hasError('required') ? 'Você deve preencher seu endereço' : '';
  }

  getNumeroErrorMessage() {
    return this.numero.hasError('required') ? 'Você deve preencher seu numero' : '';
  }

  getSenhaErrorMessage() {
    return this.senha.hasError('required') ? 'Você deve preencher sua senha' : '';
  }

  constructor(private httpClient: HttpClient, public router: Router, public snackBar: MatSnackBar) {
    this.cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
    this.celMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    this.cepMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
    this.numMask = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/];
  }

  getCityState() {
    this.filtredStates = [];
    this.httpClient.get(this.api_urlCityState).subscribe(jsonStates => {
      this.json = jsonStates;
      this.cityStates = this.json.estados;
      this.cityStates.forEach(element => {
        this.filtredStates.push(element.sigla);
      });
    });
  }

  ngOnInit() {
    this.getCityState();
    this.sexo = [
      { value: 'Masculino', viewValue: 'Masculino' },
      { value: 'Feminino', viewValue: 'Feminino' }
    ];

  }

  goTo(route: string) {
    this.router.navigate([route]);
  }

  fillFiltredStates() {
    this.citiesArrays = [];
    this.filtredStates = [];
    this.filtredCities = [];
    if (!!this.pfisica.estado) {
      this.cityStates.forEach(element => {
        if (this.pfisica.estado.toLowerCase() === element.sigla.slice(0, this.pfisica.estado.length).toLowerCase()) {
          this.filtredStates.push(element.sigla);
          this.citiesArrays.push(element.cidades);
        }
      });
      this.citiesArrays.forEach(element => {
        element.forEach(element2 => {
          this.filtredCities.push(element2);
        });
      });
    }
  }

  fillFiltredCities() {
    this.filtredCities = [];
    if (!!this.pfisica.cidade) {
      this.citiesArrays.forEach(element => {
        element.forEach(element2 => {
          if (this.pfisica.cidade.toLowerCase() === element2.slice(0, this.pfisica.cidade.length).toLowerCase()) {
            this.filtredCities.push(element2);
          }
        });
      });
    }
  }

  registerPf() {

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

    if (this.pfisica.email === null || this.pfisica.senha === null || this.pfisica.cpf === null || this.pfisica.nome === null ||
      this.pfisica.sexo === null || this.pfisica.data === null || this.pfisica.telefone === null || this.pfisica.cep === null ||
      this.pfisica.estado === null || this.pfisica.endereco === null || this.pfisica.numero === null) {
      this.snackBar.open('Preencha todos os dados obrigatórios', 'OK', {
        duration: 2000,
      });
    } else {

      return this.httpClient.post<PFisica>(this.apiUrl, this.postData)
        .subscribe(res => {
          console.log(res);
          this.snackBar.open('Usuário Cadastrado com Sucesso!', 'OK', {
            duration: 2000,
          });
          this.goTo('login');
        },
          err => {
            this.snackBar.open('Erro ao Cadastrar Usuário', 'OK', {
              duration: 2000,
            });
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
    let cpf = this.pfisica.cpf.toString();
    let beforeCpf = cpf.replace('.', '');
    beforeCpf = beforeCpf.replace('.', '');
    beforeCpf = beforeCpf.replace('-', '');
    this.pfisica.cpf = parseInt(beforeCpf);
  }

  removeCelMask() {
    let cel = this.pfisica.telefone.toString();
    let beforeCel = cel.replace('(', '');
    beforeCel = beforeCel.replace(')', '');
    beforeCel = beforeCel.replace(' ', '');
    beforeCel = beforeCel.replace('-', '');
    this.pfisica.telefone = parseInt(beforeCel);
  }

  removeCepMask() {
    let cep = this.pfisica.cep.toString();
    let beforeCep = cep.replace('.', '');
    beforeCep = beforeCep.replace('-', '');
    this.pfisica.cep = parseInt(beforeCep);
  }


}
