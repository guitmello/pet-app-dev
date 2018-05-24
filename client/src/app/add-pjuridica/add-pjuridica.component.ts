import { Component, OnInit } from '@angular/core';
import { PJuridica } from './p-juridica';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

const api_url = environment.apiUrl;

@Component({
  selector: 'app-add-pjuridica',
  templateUrl: './add-pjuridica.component.html',
  styleUrls: ['./add-pjuridica.component.css']
})
export class AddPjuridicaComponent implements OnInit {

  filtredStates: any = {};
  filtredCities: Array<any>;
  citiesArrays: any = {};
  json: any = {};
  cityStates: any = {};
  data: any = {};
  postData: any = {};
  public cnpjMask: Array<string | RegExp>;
  public celMask: Array<string | RegExp>;
  public cepMask: Array<string | RegExp>;
  public numMask: Array<string | RegExp>;

  pjuridica: PJuridica = new PJuridica();
  private apiUrl = api_url + '/api/users/create';
  private api_urlCityState = api_url + '/api/citystate';

  razaoSocial = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  cnpj = new FormControl('', [Validators.required, Validators.minLength(14)]);
  telefone = new FormControl('', [Validators.required]);
  cep = new FormControl('', [Validators.required, Validators.minLength(8)]);
  estado = new FormControl('', [Validators.required]);
  cidade = new FormControl('', [Validators.required]);
  endereco = new FormControl('', [Validators.required]);
  numero = new FormControl('', [Validators.required]);
  completo = new FormControl('', [Validators.required]);
  senha = new FormControl('', [Validators.required]);

  getRazaoSocialErrorMessage() {
    return this.razaoSocial.hasError('required') ? 'Preencha sua razão social' : '';
  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'Preencha seu email' :
      this.email.hasError('email') ? 'Email incorreto' :
        '';
  }

  getCnpjErrorMessage() {
    return this.cnpj.hasError('required') ? 'Preencha seu cnpj' :
      this.cnpj.hasError('minlength') ? 'Preencha corretamente o cnpj' :
        '';
  }

  getTelefoneErrorMessage() {
    return this.telefone.hasError('required') ? 'Preencha seu telefone' : '';
  }

  getCepErrorMessage() {
    return this.cep.hasError('required') ? 'Preencha seu cep' :
      this.cep.hasError('minlength') ? 'Preencha corretamente o cep' :
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

  constructor(private httpClient: HttpClient, public router: Router, public snackBar: MatSnackBar) {
    this.cnpjMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/',
      /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
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

  }


  fillFiltredStates() {
    this.citiesArrays = [];
    this.filtredStates = [];
    this.filtredCities = [];
    if (!!this.pjuridica.estado) {
      this.cityStates.forEach(element => {
        if (this.pjuridica.estado.toLowerCase() === element.sigla.slice(0, this.pjuridica.estado.length).toLowerCase()) {
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
    if (!!this.pjuridica.cidade) {
      this.citiesArrays.forEach(element => {
        element.forEach(element2 => {
          if (this.pjuridica.cidade.toLowerCase() === element2.slice(0, this.pjuridica.cidade.length).toLowerCase()) {
            this.filtredCities.push(element2);
          }
        });
      });
    }
  }


  registerPj() {
    this.removeMasks();

    this.postData = {
      nm_email_usuario: this.pjuridica.email,
      cd_senha_usuario: this.pjuridica.senha,
      nm_tipo_usuario: 'Pessoa Jurídica',
      cd_cnpj_usuario: this.pjuridica.cnpj,
      nm_usuario: this.pjuridica.razaoSocial,
      cd_telefone_usuario: this.pjuridica.telefone,
      cd_cep_usuario: this.pjuridica.cep,
      nm_estado_usuario: this.pjuridica.estado,
      nm_cidade_usuario: this.pjuridica.cidade,
      nm_endereco_usuario: this.pjuridica.endereco,
      cd_numero_endereco_usuario: this.pjuridica.numero,
      ds_complemento_endereco_usuario: this.pjuridica.complemento
    };

    return this.httpClient.post<PJuridica>(this.apiUrl, this.postData)
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

  goTo(route: string) {
    this.router.navigate([route]);
  }

  removeMasks() {
    this.removeCnpjMask();
    this.removeCelMask();
    this.removeCepMask();
    this.removeNumeroMask();
  }

  removeNumeroMask() {
    const numberHome = this.pjuridica.numero.toString();
    const beforeNumberH = numberHome;
    for (let x = 0; x <= beforeNumberH.length; x++) {
      if (!parseInt(numberHome.slice(x, x + 1))) {
        numberHome.replace('_', '');
      }
    }
    this.pjuridica.numero = parseInt(numberHome);
  }

  removeCnpjMask() {
    const cnpj = this.pjuridica.cnpj.toString();
    let beforeCnpj = cnpj.replace('.', '');
    beforeCnpj = beforeCnpj.replace('.', '');
    beforeCnpj = beforeCnpj.replace('/', '');
    beforeCnpj = beforeCnpj.replace('-', '');
    this.pjuridica.cnpj = parseInt(beforeCnpj);
  }

  removeCelMask() {
    const cel = this.pjuridica.telefone.toString();
    let beforeCel = cel.replace('(', '');
    beforeCel = beforeCel.replace(')', '');
    beforeCel = beforeCel.replace(' ', '');
    beforeCel = beforeCel.replace('-', '');
    this.pjuridica.telefone = parseInt(beforeCel);
  }

  removeCepMask() {
    const cep = this.pjuridica.cep.toString();
    let beforeCep = cep.replace('.', '');
    beforeCep = beforeCep.replace('-', '');
    this.pjuridica.cep = parseInt(beforeCep);
  }



}
