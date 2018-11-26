import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { Pet } from '../pet.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-pet-view',
  templateUrl: './pet-view.component.html',
  styleUrls: ['./pet-view.component.scss']
})
export class PetViewComponent implements OnInit {

  pets: Pet[] = [];
  userId: number;

  constructor(
    private petService: PetService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.activatedRoute.snapshot.routeConfig.path === 'favoritos') {
      this.getFavorites();
    } else if (this.activatedRoute.snapshot.routeConfig.path === 'home') {
      this.getAll();
    } else {

    }
  }

  getFavorites() {
    this.userId = this.userService.getUserId();
    this.petService.getMyFavorites(this.userId)
      .subscribe(response => this.pets = response);
  }

  getAll() {
    this.petService.getAllPets()
      .subscribe(response => this.pets = response);
  }

}
