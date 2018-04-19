import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeusPetsRoutingModule } from './meus-pets-routing.module';
import { MeusPetsComponent } from './meus-pets.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    MeusPetsRoutingModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
  ],
  declarations: [MeusPetsComponent]
})
export class MeusPetsModule { }
