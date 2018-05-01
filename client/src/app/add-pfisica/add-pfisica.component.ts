import { Component, OnInit } from '@angular/core';
import { PFisica } from './p-fisica';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';
import { environment } from '../../environments/environment';

const api_url = environment.apiUrl;

@Component({
  selector: 'app-add-pfisica',
  templateUrl: './add-pfisica.component.html',
  styleUrls: ['./add-pfisica.component.css']
})
export class AddPfisicaComponent implements OnInit {

  sexo: Array<any>;
  data: any = {};
  postData: any = {};
  public cpfMask: Array<string | RegExp>;
  public celMask: Array<string | RegExp>;
  public cepMask: Array<string | RegExp>;
  public numMask: Array<string | RegExp>;

  md5 = new Md5();
  pfisica: PFisica = new PFisica();
  senha: string;
  private apiUrl = api_url + '/api/users/create';

  constructor(private httpClient: HttpClient) {
    this.cpfMask = [/\d/,/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
    this.celMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    this.cepMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
    this.numMask = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/];
  }

  ngOnInit() {
    this.sexo = [
      {value: 'M', viewValue: 'Masculino'},
      {value: 'F', viewValue: 'Feminino'}
    ];
  }

  registerPf() {
    this.removeMasks();
    this.md5.appendStr(this.senha);
    let newSenha = this.md5.end();
    this.pfisica.senha = newSenha.toString();

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
      cd_numero_endereco_usuario: this.pfisica.numero,
      ds_complemento_endereco_usuario: this.pfisica.complemento
    };

    return this.httpClient.post<PFisica>(this.apiUrl, this.postData)
      .subscribe(
        res => {
          console.log(res);
          alert('Cadastrado');
        },
        err => {
          console.log("Error occured");
        }
      );
  }


  removeMasks() {
    this.removeCpfMask();
    this.removeCelMask();
    this.removeCepMask();
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
