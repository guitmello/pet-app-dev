import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ModalDeletePetComponent } from './modal-delete-pet/modal-delete-pet.component';
import { MatDialog, MatDialogRef } from '@angular/material';

const api_url = environment.apiUrl;

@Component({
  selector: 'app-meus-pets',
  templateUrl: './meus-pets.component.html',
  styleUrls: ['./meus-pets.component.css']
})
export class MeusPetsComponent implements OnInit {
  private apiUrl = api_url;
  dataPets: any = {};
  dataRacas: any = {};
  dataEspecies: any = {};
  meusPets: Array<any>;
  racas: Array<any>;
  especies: Array<any>;

  constructor(private httpClient: HttpClient, public dialog: MatDialog) { }

  async ngOnInit() {
    await this.getRacas('/api/racas/all');
    await this.getEspecies('/api/especies/all');
    this.getMeusPets('/api/animals/myanimals/' + localStorage.getItem('id'));
  }

  getRacas(url: string) {
    this.httpClient.get(api_url + url).subscribe(racas => {
      this.dataRacas = racas;
      this.racas = this.dataRacas.payload;
      console.log(this.racas);
    });
  }

  getEspecies(url: string) {
    this.httpClient.get(api_url + url).subscribe(especies => {
      this.dataEspecies = especies;
      this.especies = this.dataEspecies.payload;
      console.log(this.especies);
    });
  }

  getMeusPets(url: string) {
    const userToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', userToken);

    this.httpClient.get(api_url + url, { headers }).subscribe( data => {
      this.dataPets = data;
      this.meusPets = this.dataPets.payload;
      this.meusPets.forEach(element => {
        for (let x = 0; x <= this.racas.length - 1; x++) {
          if ( element.id_raca === this.racas[x].id_raca ) {
            element.nm_raca = this.racas[x].nm_raca;
          }
        }

        for (let y = 0; y <= this.especies.length - 1; y++) {
          if (element.id_especie === this.especies[y].id_especie) {
            element.nm_especie = this.especies[y].nm_especie;
          }
        }
      });
      console.log(this.meusPets);
    });
  }

  openDialog(id: string) {
    let dialogRef = this.dialog.open(ModalDeletePetComponent, {
      width: '300px',
      height: '210px',
      data: {}
    });
  }

}
