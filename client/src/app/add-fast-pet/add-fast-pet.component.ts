import { Component, OnInit, EventEmitter } from '@angular/core';
import { AddFastPet } from './add-fast-pet';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

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
  
  latitudeEmitter = new EventEmitter<number>();
  longitudeEmitter = new EventEmitter<number>();

  constructor(private httpClient: HttpClient, private addFastPet: AddFastPet, public router: Router, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  
  getAdress() {
    navigator.geolocation.getCurrentPosition(this.showPosition);
 
    this.httpClient.get(this.mapsUrl + localStorage.getItem('MyLatitude') + ',' + localStorage.getItem('MyLongitude')  + this.mapsUrlFinal).subscribe( adress => {
      this.dataAdress = adress;
      this.addFastPet = this.dataAdress.results;
      console.log(this.addFastPet[0].address_components[0]);
      });

      nm_estado_animal: this.addFastPet[0].address_components[5].long_name;
      nm_cidade_animal: this.addFastPet[0].address_components[3].long_name;
      nm_endereco_animal: this.addFastPet[0].address_components[2].long_name;
      nm_numero_endereco_animal: this.addFastPet[0].address_components[0].long_name;

  }


  showPosition(position) {
    localStorage.setItem('MyLatitude', position.coords.latitude);
    localStorage.setItem('MyLongitude', position.coords.longitude);
  }

}
