import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/map';

const api_url = environment.apiUrl;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private apiUrl = api_url;
  data: any = {};

  constructor(private http: HttpClient) {
    this.getUsuario();
  }

  getData() {
    this.apiUrl += '/login';
    return this.http.get(this.apiUrl);
  }

  getUsuario() {
    this.getData().subscribe(usuario => {
      this.data = usuario;
      console.log(usuario);
    });

  }
}
