import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import { NgModel } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { MeusPets } from "./meus-pets";
import { ModalDeletePetComponent } from "./modal-delete-pet/modal-delete-pet.component";
import { MatDialog, MatDialogRef } from "@angular/material";

const api_url = environment.apiUrl;

@Component({
  selector: "app-meus-pets",
  templateUrl: "./meus-pets.component.html",
  styleUrls: ["./meus-pets.component.css"]
})
export class MeusPetsComponent implements OnInit {
  private apiUrl = api_url;
  dataPets: any = {};
  dataRacas: any = {};
  dataEspecies: any = {};
  pets: Array<any>;
  racas: Array<any>;
  especies: Array<any>;

  deleteId: number;

  constructor(
    private httpClient: HttpClient,
    public dialog: MatDialog,
    private meusPets: MeusPets,
    public router: Router
  ) {}

  async ngOnInit() {
    //await this.getRacas("/api/racas/all");
    //await this.getEspecies("/api/especies/all");
    this.getMeusPets("/api/animals/myanimals/" + localStorage.getItem("id"));
  }

  imgLoad(id, img) {
    document.getElementById(id).style.backgroundImage = "url(" + img + ")";
    console.log(id);
    console.log(img);
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
    const userToken = localStorage.getItem("token");
    const headers = new HttpHeaders().set("Authorization", userToken);

    this.httpClient.get(api_url + url, { headers }).subscribe(data => {
      this.dataPets = data;
      this.pets = this.dataPets.payload;
    });
  }

  openDialog(id: number) {
    const dialogRef = this.dialog.open(ModalDeletePetComponent, {
      width: "300px",
      height: "210px",
      data: {
        id: id
      }
    });
  }
}
