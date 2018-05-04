import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpParams } from '@angular/common/http';

const api_url = environment.apiUrl;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private apiUrl = api_url;
  data: any = {};
  petsHome: Array<any>;

  constructor(public router: Router, private httpClient: HttpClient) { }

  ngOnInit() {
    this.getPets('/api/animals/all');
  }

  getPets(URL) {
    const userToken = localStorage.getItem('token');

    //const headers = new HttpHeaders().set('Authorization', userToken);
    //console.log(headers);

      let headers = new HttpHeaders();
      headers = headers.append('Authorization', userToken);
      console.log(headers);

      this.httpClient.get(api_url + URL, { headers: headers } ).subscribe(pets => {
      this.data = pets;
      this.petsHome = this.data.pets;
      console.log(this.petsHome);
    });
  }

  moreInfo(id: string) {
    this.router.navigate([`pet-info`]);
  }

}
