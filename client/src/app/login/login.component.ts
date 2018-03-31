import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    return this.email.hasError('required') ? 'Você deve preencher seu email' :
        this.email.hasError('email') ? 'Email incorreto' :
            '';
  }

  constructor() { }

  ngOnInit() {
  }

}

