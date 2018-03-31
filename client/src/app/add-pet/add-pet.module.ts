import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPetRoutingModule } from './add-pet-routing.module';
import { AddPetComponent } from './add-pet.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    AddPetRoutingModule,
    MatCardModule,
  ],
  declarations: [AddPetComponent]
})
export class AddPetModule { }
