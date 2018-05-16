import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/map';
import { LoginService } from './login/login.service';
import { Router } from '@angular/router'
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mostrarMenu: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private loginService: LoginService, public router: Router) { }

  ngOnInit() {

    window.onload = function(event) {
      let w = window.innerWidth;
      let h = window.innerHeight;

      if (w <= 500 && h <= 825) {
        console.log('Smartphone');
      } else if ((w >= 768 && h >= 1024) && (w <= 1024 && h <= 1366)) {
        window.location.href = 'https://idotapp.github.io/site-institucional/site-institucional.html';
      } else {
        window.location.href = 'https://idotapp.github.io/site-institucional/site-institucional.html';
        console.log('Desktop');
      }
    };

    window.onresize = function(event) {
      let w = window.innerWidth;
      let h = window.innerHeight;

      if (w <= 500 && h <= 825) {
        console.log('Smartphone');
      } else if ((w >= 768 && h >= 1024) && (w <= 1024 && h <= 1366)) {
        window.location.href = 'https://idotapp.github.io/site-institucional/site-institucional.html';
      } else {
        window.location.href = 'https://idotapp.github.io/site-institucional/site-institucional.html';
        console.log('Desktop');
      }

    };


  if ((!localStorage.getItem('token')) || (!sessionStorage.getItem('id')) /*|| (this.mostrarMenu === false)*/ ) {
      this.logoff('login');
    }


    this.loginService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar,
    );

    const userId = localStorage.getItem('id');

  }

  logoff(route: string) {
    this.router.navigate([route]);
    sessionStorage.clear();
    localStorage.clear();
    this.mostrarMenuEmitter.emit(false);
  }

}
