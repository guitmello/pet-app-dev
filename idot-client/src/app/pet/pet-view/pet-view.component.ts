import { Component, OnInit, Input } from '@angular/core';
import { Pet } from '../pet.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pet-view',
  templateUrl: './pet-view.component.html',
  styleUrls: ['./pet-view.component.scss']
})
export class PetViewComponent implements OnInit {

  @Input() pets: Pet[] = [new Pet()];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.activatedRoute.snapshot.routeConfig.path === 'favoritos') {
      console.log(this.pets);
    }
  }

  goInfo(id: number) {
    this.router.navigateByUrl('pet-info/' + id);
  }

}
