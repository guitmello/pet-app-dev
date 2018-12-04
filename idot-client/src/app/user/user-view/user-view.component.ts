import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.model';
import { Router } from '@angular/router';
import { fadeInUp } from 'ng-animate';
import { trigger, useAnimation, transition } from '@angular/animations';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss'],
  animations: [
    trigger('fadeInUp', [transition('* => *', useAnimation(fadeInUp, {
      params: { timing: 0.8, delay: 0 }
    }))])
  ]
})
export class UserViewComponent implements OnInit {

  @Input() users: User[] = [new User()];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goInfo(id: number) {
    this.router.navigateByUrl('usuario-info/' + id);
  }

}
