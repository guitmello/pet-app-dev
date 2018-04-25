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
  public cpfMask: Array<string | RegExp>;
  public celMask: Array<string | RegExp>;
  public cepMask: Array<string | RegExp>;
  public numMask: Array<string | RegExp>;

  md5 = new Md5();
  pfisica: PFisica = new PFisica();
  senha: string;
  private apiUrl = api_url;

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
    this.apiUrl += '/add-pfisica%3Ftype=sucess';
    this.removeMasks();
    this.md5.appendStr(this.senha);
    let newSenha = this.md5.end();
    this.pfisica.senha = newSenha.toString();
    return this.httpClient.post<PFisica>(this.apiUrl, this.pfisica)
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
    let cel = this.pfisica.celular.toString();
    let beforeCel = cel.replace('(', '');
    beforeCel = beforeCel.replace(')', '');
    beforeCel = beforeCel.replace(' ', '');
    beforeCel = beforeCel.replace('-', '');
    this.pfisica.celular = parseInt(beforeCel);
  }

  removeCepMask() {
    let cep = this.pfisica.cep.toString();
    let beforeCep = cep.replace('.', '');
    beforeCep = beforeCep.replace('-', '');
    this.pfisica.cep = parseInt(beforeCep);
  }


}
