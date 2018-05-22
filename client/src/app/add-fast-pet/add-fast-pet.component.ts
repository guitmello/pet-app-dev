import { Component, OnInit, EventEmitter } from '@angular/core';
import { AddFastPet } from './add-fast-pet';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-fast-pet',
  templateUrl: './add-fast-pet.component.html',
  styleUrls: ['./add-fast-pet.component.css']
})
export class AddFastPetComponent implements OnInit {

  private mapsUrl = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=';
  private mapsUrlFinal = '&sensor=true';

  form: FormGroup;

  addfastpet: AddFastPet = new AddFastPet();
  dataAdress: any = {};
  adress: any = {};

  constructor(private httpClient: HttpClient, private addFastPet: AddFastPet, public router: Router,
    public snackBar: MatSnackBar, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({

        nm_estado_animal: [null],
        nm_cidade_animal: [null],
        nm_endereco_animal: [null],
        nm_numero_endereco_animal: [null]

    });

  }


  async getAdress() {
    navigator.geolocation.getCurrentPosition(this.showPosition);

    await this.httpClient.get(this.mapsUrl + localStorage.getItem('MyLatitude') + ',' + localStorage.getItem('MyLongitude')
    + this.mapsUrlFinal).subscribe( adress => {
      this.dataAdress = adress;
      this.addFastPet = this.dataAdress.results;
      console.log(this.addFastPet[0]);
      });

  }


  showPosition(position) {
    localStorage.setItem('MyLatitude', position.coords.latitude);
    localStorage.setItem('MyLongitude', position.coords.longitude);
  }

}
