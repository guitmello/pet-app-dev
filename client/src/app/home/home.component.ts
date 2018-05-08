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
  dataPets: any = {};
  dataRacas: any = {};
  elementData: any = {};
  dataEspecies: any = {};
  dataUsuarios: any = {};
  petsHome: Array<any>;
  racas: Array<any>;
  especies: Array<any>;
  usuarios: Array<any>;

  constructor(public router: Router, private httpClient: HttpClient) { }

  async ngOnInit() {
    await this.getRacas('/api/racas/all');
    await this.getEspecies('/api/especies/all');
    // await this.getUsers('/api/users/all');
    this.getPets('/api/animals/all');
  }

  getRacas(url: string) {
    this.httpClient.get(api_url + url).subscribe(racas => {
      this.dataRacas = racas;
      this.racas = this.dataRacas.payload;
      console.log(this.racas);
    });
  }

  // getUsers(url: string) {
  //   this.httpClient.get(api_url + url).subscribe(usuarios => {
  //     this.dataUsuarios = usuarios;
  //     this.usuarios = this.dataUsuarios.payload;
  //     console.log(this.usuarios);
  //   });
  // }

  getEspecies(url: string) {
    this.httpClient.get(api_url + url).subscribe(especies => {
      this.dataEspecies = especies;
      this.especies = this.dataEspecies.payload;
      console.log(this.especies);
    });
  }

  async getPets(url: string) {
    const userToken = localStorage.getItem('token');

    const headers = new HttpHeaders().set('Authorization', userToken);

    this.httpClient.get(api_url + url, { headers }).subscribe(pets => {
      this.dataPets = pets;
      this.petsHome = this.dataPets.payload;
      this.petsHome.forEach(element => {
        for (let x = 0; x <= this.racas.length - 1; x++) {
          if (element.id_raca === this.racas[x].id_raca) {
            element.nm_raca = this.racas[x].nm_raca;
          }
        }
        for (let y = 0; y <= this.especies.length - 1; y++) {
          if (element.id_especie === this.especies[y].id_especie) {
            element.nm_especie = this.especies[y].nm_especie;
          }
        }
        this.httpClient.get(api_url + '/api/users/' + element.cd_usuario_fk, { headers }).subscribe(elementUser => {
          this.elementData = elementUser;
          console.log(this.elementData);
          element.address1 = this.elementData.payload.nm_cidade_usuario + ' - ' + this.elementData.payload.nm_estado_usuario;
          element.address2 = this.elementData.payload.nm_endereco_usuario;
        });
      });
      console.log(this.petsHome);
    });
  }

  // moreInfo(id: string) {
  //   this.router.navigate([`pet-info?` + id]);
  // }

}
