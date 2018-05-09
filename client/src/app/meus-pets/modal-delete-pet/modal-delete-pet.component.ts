import { Component, OnInit, Inject, EventEmitter, Input, Output} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const api_url = environment.apiUrl;

@Component({
  selector: 'app-modal-delete-pet',
  templateUrl: './modal-delete-pet.component.html',
  styleUrls: ['./modal-delete-pet.component.css']
})
export class ModalDeletePetComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalDeletePetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private httpClient: HttpClient,
    public snackBar: MatSnackBar) {}

  ngOnInit() { }

  cancel() {
    this.dialogRef.close();
  }

  deletePet() {
    const url = '/api/animals/' + this.data.id + '/destroy' ;
    const userToken = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', userToken);

    this.httpClient.delete(api_url + url, { headers }).subscribe( destroy => {
      this.snackBar.open('Pet excluído', 'OK', {
        duration: 2000,
      });
      this.cancel();
    }
    )}

}
