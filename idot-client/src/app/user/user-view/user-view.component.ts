import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
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
