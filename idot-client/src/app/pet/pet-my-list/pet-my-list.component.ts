import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { Pet } from '../pet.model';
import { ModalDeleteComponent } from '../../modal-delete/modal-delete.component';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-pet-my-list',
  templateUrl: './pet-my-list.component.html',
  styleUrls: ['./pet-my-list.component.scss']
})
export class PetMyListComponent implements OnInit {

  pets: Pet[] = [];
  races: Pet[] = [];
  species: Pet[] = [];

  userId: number;

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
