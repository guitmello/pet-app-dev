import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetInfoRoutingModule } from './pet-info-routing.module';
import { PetInfoComponent } from './pet-info.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    PetInfoRoutingModule,
    MatCardModule,
  ],
  declarations: [PetInfoComponent]
})
export class PetInfoModule { }
