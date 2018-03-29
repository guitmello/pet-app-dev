import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeusPetsRoutingModule } from './meus-pets-routing.module';
import { MeusPetsComponent } from './meus-pets.component';

@NgModule({
  imports: [
    CommonModule,
    MeusPetsRoutingModule
  ],
  declarations: [MeusPetsComponent]
})
export class MeusPetsModule { }
