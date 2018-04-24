import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-pfisica',
  templateUrl: './add-pfisica.component.html',
  styleUrls: ['./add-pfisica.component.css']
})
export class AddPfisicaComponent implements OnInit {

  sexo: Array<any>;

  constructor() { }

  ngOnInit() {
    this.sexo = [
      {value: 'Masculino', viewValue: 'Masculino'},
      {value: 'Feminino', viewValue: 'Feminino'}
    ];
  }

}
