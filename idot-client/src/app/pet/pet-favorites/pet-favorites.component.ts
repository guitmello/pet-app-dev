import { Component, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { PetService } from '../pet.service';
import { Pet } from '../pet.model';

@Component({
  selector: 'app-pet-favorites',
  templateUrl: './pet-favorites.component.html',
  styleUrls: ['./pet-favorites.component.scss']
})
export class PetFavoritesComponent implements OnInit {

  @Output() pets: Pet[] = [new Pet()];
  userId: number;

  constructor(
    private userService: UserService,
    private petService: PetService
  ) { }

  ngOnInit() {
    this.getFavorites();
  }

  getFavorites() {
    this.userId = this.userService.getUserId();
    this.petService.getMyFavorites(this.userId)
      .subscribe(response => {
        this.pets = response;
        console.log(this.pets);
      });
  }

}
