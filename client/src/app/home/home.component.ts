import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';

const api_url = environment.apiUrl;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private apiUrl = api_url;
  dataPets: any = {};
  dataRacas: any = {};
  elementData: any = {};
  dataEspecies: any = {};
  dataUsuarios: any = {};
  petsHome: Array<any>;

  mostrarLoading: boolean = false;
  mostrarLoadingEmmiter = new EventEmitter<boolean>();

  constructor(public router: Router, private httpClient: HttpClient, private appComponent: AppComponent) { }

  async ngOnInit() {
    this.appComponent.mostrarLoadingEmmiter.subscribe(
      mostrarSpinner => this.mostrarLoading = mostrarSpinner,
    );
    
    this.getPets('/api/animals/getAllAnimals');
  }

  async getPets(url: string) {
    const userToken = localStorage.getItem('token');

    const headers = new HttpHeaders().set('Authorization', userToken);

    this.httpClient.get(api_url + url, { headers }).subscribe(pets => {
      this.dataPets = pets;
      this.petsHome = this.dataPets.payload;
    });

    
  }

}
