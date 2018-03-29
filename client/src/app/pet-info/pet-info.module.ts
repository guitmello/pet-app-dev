import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetInfoRoutingModule } from './pet-info-routing.module';
import { PetInfoComponent } from './pet-info.component';

@NgModule({
  imports: [
    CommonModule,
    PetInfoRoutingModule
  ],
  declarations: [PetInfoComponent]
})
export class PetInfoModule { }
