import { Component, OnInit } from '@angular/core';
import { PJuridica } from './p-juridica';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-add-pjuridica',
  templateUrl: './add-pjuridica.component.html',
  styleUrls: ['./add-pjuridica.component.css']
})
export class AddPjuridicaComponent implements OnInit {

  data: any = {};
  public urlPj: string;
  public cnpjMask: Array<string | RegExp>;
  public celMask: Array<string | RegExp>;
  public cepMask: Array<string | RegExp>;
  public numMask: Array<string | RegExp>;

  md5 = new Md5();
  pjuridica: PJuridica = new PJuridica();
  senha: string;

  constructor(private httpClient: HttpClient) {
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
    this.urlPj = 'http://demo5541414.mockable.io/add-pjuridica%3Ftype=sucess';
    return this.httpClient.post<PJuridica>(this.urlPj, this.pjuridica)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }

  removeMasks() {
    this.removeCnpjMask();
    this.removeCelMask();
    this.removeCepMask();
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
    let cel = this.pjuridica.celular.toString();
    let beforeCel = cel.replace('(', '');
    beforeCel = beforeCel.replace(')', '');
    beforeCel = beforeCel.replace(' ', '');
    beforeCel = beforeCel.replace('-', '');
    this.pjuridica.celular = parseInt(beforeCel);
  }

  removeCepMask() {
    let cep = this.pjuridica.cep.toString();
    let beforeCep = cep.replace('.', '');
    beforeCep = beforeCep.replace('-', '');
    this.pjuridica.cep = parseInt(beforeCep);
  }



}
