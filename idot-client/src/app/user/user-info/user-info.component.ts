import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user.model';
import { bounceIn, fadeIn } from 'ng-animate';
import { trigger, useAnimation, transition } from '@angular/animations';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
  animations: [
    trigger('bounceIn', [transition('* => *', useAnimation(bounceIn, {
      params: { timing: 0.5, delay: 0 }
    }))]),
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn, {
      params: { timing: 0.8, delay: 0 }
    }))])
  ]
})
export class UserInfoComponent implements OnInit {

  user: User;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.getUser(params.id);
      }
    });
  }

  getUser(id: number) {
    this.userService.getUser(id)
      .subscribe(response => {
        this.user = response;
      });
  }

}
