import { Component, OnInit } from '@angular/core';
import { PJuridica } from './p-juridica';

@Component({
  selector: 'app-add-pjuridica',
  templateUrl: './add-pjuridica.component.html',
  styleUrls: ['./add-pjuridica.component.css']
})
export class AddPjuridicaComponent implements OnInit {

  data: any = {};
  public cnpjMask: Array<string | RegExp>;

  pjuridica: PJuridica = new PJuridica();

  constructor() {
    this.cnpjMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/',
      /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  }

  ngOnInit() {
  }

  registerPj() {
    this.removeMask();
    console.log(this.pjuridica);
  }

  removeMask(){
    let cnpj = this.pjuridica.cnpj.toString();
    this.pjuridica.cnpj;
    let precnpj = cnpj.replace('.', '');
    precnpj = precnpj.replace('.', '');
    precnpj = precnpj.replace('/', '');
    precnpj = precnpj.replace('-', '');
    this.pjuridica.cnpj = parseInt(precnpj);
  }
}
