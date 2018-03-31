import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeusPetsRoutingModule } from './meus-pets-routing.module';
import { MeusPetsComponent } from './meus-pets.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MeusPetsRoutingModule,
    MatCardModule,
  ],
  declarations: [MeusPetsComponent]
})
export class MeusPetsModule { }
