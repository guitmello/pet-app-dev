import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { Pet } from '../pet.model';
import { PetFavorite } from '../petFavorite.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { fadeInUp, bounceIn, fadeIn } from 'ng-animate';
import { trigger, useAnimation, transition } from '@angular/animations';


@Component({
  selector: 'app-pet-info',
  templateUrl: './pet-info.component.html',
  styleUrls: ['./pet-info.component.scss'],
  animations: [
    trigger('fadeInUp', [transition('* => *', useAnimation(fadeInUp, {
      params: { timing: 0.8, delay: 0 }
    }))]),
    trigger('bounceIn', [transition('* => *', useAnimation(bounceIn, {
      params: { timing: 0.5, delay: 0 }
    }))]),
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn, {
      params: { timing: 0.8, delay: 0 }
    }))])
  ]
})
export class PetInfoComponent implements OnInit {

  pet: Pet;
  petFavorite: PetFavorite = new PetFavorite();
  races: Pet[] = [];
  species: Pet[] = [];
  petFavorited: boolean;
  userId: number;

  constructor(
    private petService: PetService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.getPet(params.id);
      }
    });
  }

  getPet(id: number) {
    this.userId = this.userService.getUserId();
    this.petService.getPet(id)
      .subscribe(response => {
        this.pet = response;
        this.petService.getMyFavorites(this.userId).subscribe(pets => {
          // pets.payload.forEach(pet => {
            // if (this.pet.id === pet.cd_animal_fk) {
              // this.petFavorited = true;
            // }
          // });
        });
      });
  }

  favorite() {
    this.userId = this.userService.getUserId();
    this.petFavorite.cd_usuario_fk = this.userId;
    this.petFavorite.cd_animal_fk = this.pet.payload.id;
    this.petService.addFavorite(this.petFavorite).subscribe(response => {
      this.petFavorited = true;
    });
  }

  unFavorite() {
    this.petService.addFavorite(this.pet).subscribe(response => {
      console.log(response);
      this.petFavorited = false;
    });
  }
}
