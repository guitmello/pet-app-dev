import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

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
    let headers = new HttpHeaders().set('Authorization', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.ILTRSG9d5bPDeXc15gol_yUR68sEp2AbulBv-SZmbak')
    this.httpClient.get(api_url + URL, { headers }).subscribe(pets => {
      this.data = pets;
      this.petsHome = this.data.pets;
      console.log(this.petsHome);
    });
    console.log(headers.get('Authorization'));
  }

  moreInfo(id: string) {
    this.router.navigate([`pet-info`]);
  }

}
