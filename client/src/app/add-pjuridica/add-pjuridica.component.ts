import { Component, OnInit } from '@angular/core';
import { PJuridica } from './p-juridica';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

const api_url = environment.apiUrl;

@Component({
  selector: 'app-add-pjuridica',
  templateUrl: './add-pjuridica.component.html',
  styleUrls: ['./add-pjuridica.component.css']
})
export class AddPjuridicaComponent implements OnInit {

  data: any = {};
  postData: any = {};
  public cnpjMask: Array<string | RegExp>;
  public celMask: Array<string | RegExp>;
  public cepMask: Array<string | RegExp>;
  public numMask: Array<string | RegExp>;

  md5 = new Md5();
  pjuridica: PJuridica = new PJuridica();
  senha: string;
  private apiUrl = api_url + '/api/users/create';

  constructor(private httpClient: HttpClient, public router: Router, public snackBar: MatSnackBar) {
    this.cnpjMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/',
      /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
    this.celMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    this.cepMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
    this.numMask = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/];
  }

  ngOnInit() {
  }



  registerPj() {
    this.removeMasks();
    this.md5.appendStr(this.senha);
    let newSenha = this.md5.end();
    this.pjuridica.senha = newSenha.toString();

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
      .subscribe( res => {
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
    let numberHome = this.pjuridica.numero.toString();
    let beforeNumberH = numberHome;
    for(let x = 0 ; x<=beforeNumberH.length; x++){
      if(!parseInt(numberHome.slice(x,x+1))){
        numberHome.replace('_', '');
      }
    }
    this.pjuridica.numero = parseInt(numberHome);
  }

  removeCnpjMask() {
    let cnpj = this.pjuridica.cnpj.toString();
    let beforeCnpj = cnpj.replace('.', '');
    beforeCnpj = beforeCnpj.replace('.', '');
    beforeCnpj = beforeCnpj.replace('/', '');
    beforeCnpj = beforeCnpj.replace('-', '');
    this.pjuridica.cnpj = parseInt(beforeCnpj);
  }

  removeCelMask() {
    let cel = this.pjuridica.telefone.toString();
    let beforeCel = cel.replace('(', '');
    beforeCel = beforeCel.replace(')', '');
    beforeCel = beforeCel.replace(' ', '');
    beforeCel = beforeCel.replace('-', '');
    this.pjuridica.telefone = parseInt(beforeCel);
  }

  removeCepMask() {
    let cep = this.pjuridica.cep.toString();
    let beforeCep = cep.replace('.', '');
    beforeCep = beforeCep.replace('-', '');
    this.pjuridica.cep = parseInt(beforeCep);
  }



}
