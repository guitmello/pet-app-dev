import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const api_url = environment.apiUrl;

@Component({
  selector: 'app-meus-pets',
  templateUrl: './meus-pets.component.html',
  styleUrls: ['./meus-pets.component.css']
})
export class MeusPetsComponent implements OnInit {
  private apiUrl = api_url;
  myArray: any = {};
  meusPets: Array<any>;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getMeusPets('/pets');
  }

  getMeusPets(Pet) {
    this.httpClient.get(api_url + Pet).subscribe( data => {
      this.myArray = data;
      this.meusPets = this.myArray.pet;
    })
  }

}
