import { Component, OnInit, Input } from '@angular/core';
import { Pet } from '../pet.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-view',
  templateUrl: './pet-view.component.html',
  styleUrls: ['./pet-view.component.scss']
})
export class PetViewComponent implements OnInit {

  @Input() pets: Pet[] = [new Pet()];

  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  goInfo(id: number) {
    this.router.navigateByUrl('pet-info/' + id);
  }

}
