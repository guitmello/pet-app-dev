import { Component, OnInit } from '@angular/core';
import { AddFastPet } from './add-fast-pet';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-fast-pet',
  templateUrl: './add-fast-pet.component.html',
  styleUrls: ['./add-fast-pet.component.css']
})
export class AddFastPetComponent implements OnInit {

  private mapsUrl = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=';
  private mapsUrlFinal = '&sensor=true';

  addfastpet: AddFastPet = new AddFastPet();
  dataAdress: any = {};
  pos: any;

  latitude: number = null;
  latitudeEmitter = new EventEmitter<number>();
  longitude: number = null;
  longitudeEmitter = new EventEmitter<number>();

  constructor(private httpClient: HttpClient, private addFastPet: AddFastPet, public router: Router, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  getAdress() {
    this.getLocation();

    this.latitudeEmitter.subscribe(
      lat => this.latitude = lat,
    );

    this.longitudeEmitter.subscribe(
      lgt => this.longitude = lgt,
    );

    this.httpClient.get(this.mapsUrl + '-23.954742' + ',' + '-46.4156522' + this.mapsUrlFinal).subscribe( adress => {
      this.dataAdress = adress;
      this.addFastPet = this.dataAdress.results;
      console.log(this.addFastPet[0]);
      });
  }

  getLocation() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.pos = position;
        const lat = position.coords.latitude;
        const lgt = position.coords.longitude;
        this.latitudeEmitter.emit(lat);
        this.longitudeEmitter.emit(lgt);
        console.log(lat);
        console.log(lgt);
      },
      err => {
        this.snackBar.open('Erro ao Editar Pet', 'OK', {
          duration: 2000,
        });
      });

  }

  showPosition(position) {
    const lat = position.coords.latitude;
    const lgt = position.coords.longitude;
    console.log("showPosition");

    this.latitudeEmitter.emit(lat);
    this.longitudeEmitter.emit(lgt);
}

}
