import { Component, OnInit } from '@angular/core';
import { Filter } from './filter';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { FormControl, Validators} from '@angular/forms';

const api_url = environment.apiUrl;

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent implements OnInit {
  
  filterData: any = {};
  especieArray: any = {};
  racaArray: any = [];

  filter: Filter = new Filter();

  private apiUrl = api_url;

  raca = new FormControl('', [Validators.required]);
  especie = new FormControl('', [Validators.required]);

  getRacaErrorMessage() {
    return this.raca.hasError('required') ? 'Preencha a raça do pet' : '';
  }

  getEspecieErrorMessage() {
    return this.especie.hasError('required') ? 'Preencha a espécie do pet' : '';
  }

  constructor(private httpClient: HttpClient, public snackBar: MatSnackBar) { }

  ngOnInit() {

    this.fillEspecie();
  }

  fillRacas() {
    const userToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', userToken);

    this.httpClient.get(api_url + '/api/racas/getracas/' + this.filter.id_especie, { headers }).subscribe(element => {
      this.racaArray = element;
      this.racaArray = this.racaArray.payload;
    });
  }

  fillEspecie() {
    const userToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', userToken);

    this.httpClient.get(api_url + '/api/especies/all', { headers }).subscribe(element => {
      this.especieArray = element;
      this.especieArray = this.especieArray.payload;
    });
  }

  fillFilter() {
    this.filterData = {
      tipoPesquisa: this.filter.tipoPesquisa
    }

    console.log(this.filter.tipoPesquisa);
    
  }

}
