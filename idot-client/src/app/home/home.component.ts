import { Component, OnInit, Output } from '@angular/core';
import { PetService } from '../pet/pet.service';
import { Pet } from '../pet/pet.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() pets: Pet[] = [new Pet()];

  constructor(
    private petService: PetService
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.petService.getAllPets()
      .subscribe(response => this.pets = response);
  }

}
