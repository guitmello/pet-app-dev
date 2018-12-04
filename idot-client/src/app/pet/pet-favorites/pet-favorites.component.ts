import { Component, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { PetService } from '../pet.service';
import { Pet } from '../pet.model';
import { PetAux } from '../petAux.model';
import { Router } from '@angular/router';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeInUp } from 'ng-animate';

@Component({
  selector: 'app-pet-favorites',
  templateUrl: './pet-favorites.component.html',
  styleUrls: ['./pet-favorites.component.scss'], 
  animations: [
    trigger('fadeInUp', [transition('* => *', useAnimation(fadeInUp, {
      params: { timing: 0.8, delay: 0 }
    }))])
  ]
})
export class PetFavoritesComponent implements OnInit {

  @Output() pets: Pet[] = [new Pet()];
  array: PetAux[] = [new PetAux()];
  arrayFalsePet: any[] = [];
  arrayAux: PetAux;
  userId: number;
  thereIsPet = true;

  constructor(
    private userService: UserService,
    private router: Router,
    private petService: PetService
  ) { }

  ngOnInit() {
    this.getFavorites();
  }

  goInfo(id: number) {
    this.router.navigateByUrl('pet-info/' + id);
  }

  getFavorites() {
    this.arrayAux = new PetAux;
    this.arrayAux.payload = new Array<any>();
    this.userId = this.userService.getUserId();
    this.petService.getMyFavorites(this.userId)
      .subscribe(response => {
        this.array = response;
        this.array.payload.forEach(element => {
          const animal = element.Animal;
          this.arrayFalsePet.push(animal);
        });
        let count = 0;
        this.arrayFalsePet.forEach(element => {
          this.arrayAux.payload.push(element);
          count++;
        });
        console.log('this.arrayAux - dentro do favorites', this.arrayAux);
        if (this.arrayAux.payload.length === 0) {
          this.thereIsPet = false;
        }
      });
  }

}
