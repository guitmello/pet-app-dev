import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { Pet } from '../pet.model';
import { ModalDeleteComponent } from '../../modal-delete/modal-delete.component';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { fadeInUp } from 'ng-animate';
import { trigger, useAnimation, transition } from '@angular/animations';


@Component({
  selector: 'app-pet-my-list',
  templateUrl: './pet-my-list.component.html',
  styleUrls: ['./pet-my-list.component.scss'],
  animations: [
    trigger('fadeInUp', [transition('* => *', useAnimation(fadeInUp, {
      params: { timing: 0.8, delay: 0 }
    }))])
  ]
})
export class PetMyListComponent implements OnInit {

  pets: Pet[] = [];
  races: Pet[] = [];
  species: Pet[] = [];

  userId: number;

  thereIsPet = true;

  constructor(
    private petService: PetService,
    private userService: UserService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {

    this.userId = this.userService.getUserId();
    this.getMyPets(this.userId);
    this.getPetRemoved();
  }

  getMyPets(id: number) {
    this.petService.getMyPets(id)
      .subscribe(response => {
        this.pets = response;
        console.log(this.pets);
        if (this.pets.payload.length === 0) {
          this.thereIsPet = false;
        }
      });
  }

  openDeleteDialog(pet: Pet) {
    const dialogRef = this.dialog.open(ModalDeleteComponent, {
      width: '300px',
      height: '210px',
      data: {
        pet: pet
      }
    });
  }

  goEditPet(id: number) {
    this.router.navigateByUrl('pet/' + id);
  }

  getPetRemoved() {
    this.petService.petRemoved.subscribe(pet => {
      this.router.navigateByUrl('home');
      // this.pets.splice(this.pets.indexOf(pet), 1);
    });
  }

}
