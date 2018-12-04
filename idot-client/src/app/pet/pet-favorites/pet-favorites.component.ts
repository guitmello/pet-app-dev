import { Component, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { PetService } from '../pet.service';
import { Pet } from '../pet.model';
import { PetAux } from '../petAux.model';
import { fadeInUp } from 'ng-animate';
import { trigger, useAnimation, transition } from '@angular/animations';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router,
    private userService: UserService,
    private petService: PetService
  ) { }

  ngOnInit() {
    this.getFavorites();
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
      });
  }

  goInfo(id: number) {
    this.router.navigateByUrl('pet-info/' + id);
  }


}
