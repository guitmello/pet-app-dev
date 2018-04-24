import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/map';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mostrarMenu: boolean = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );

    window.onresize = function(event) {
      let w = window.innerWidth;
      let h = window.innerHeight;

      if (w <= 500 && h <= 825) {
        console.log('Smartphone');
      } else if ((w >= 768 && h >= 1024) && (w <= 1024 && h <= 1366)) {
        window.location.href = 'externalUrl';
      } else {
        window.location.href = 'externalUrl';
        console.log('Desktop');
      }

    };
  }

}
