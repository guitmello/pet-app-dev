import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetInfoRoutingModule } from './pet-info-routing.module';
import { PetInfoComponent } from './pet-info.component';

import { MatCardModule, MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    PetInfoRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [PetInfoComponent]
})
export class PetInfoModule { }
