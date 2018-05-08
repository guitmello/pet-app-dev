import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MeusPetsService } from '../meus-pets.service';
import { MeusPets } from '../meus-pets';

const api_url = environment.apiUrl;

@Component({
  selector: 'app-modal-delete-pet',
  templateUrl: './modal-delete-pet.component.html',
  styleUrls: ['./modal-delete-pet.component.css']
})
export class ModalDeletePetComponent implements OnInit {
  idDelete: number;

  constructor(public dialogRef: MatDialogRef<ModalDeletePetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private httpClient: HttpClient, private meusPetsService: MeusPetsService,
    private meusPets: MeusPets) {}

  ngOnInit() {
    //this.deletePet('/api/animals/delete/');
  }

  getId() {
    this.meusPetsService.emitirId.subscribe(
      idEmitido => this.idDelete
    );
  }

  deletePet(id: number) {
    this.getId();
    let url = '/api/animals/delete/' + this.idDelete;
    const userToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', userToken);

    this.httpClient.delete(api_url + url, { headers });
  }
  cancel() {
    this.dialogRef.close();
  }

}
