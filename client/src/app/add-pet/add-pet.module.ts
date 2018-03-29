import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPetRoutingModule } from './add-pet-routing.module';
import { AddPetComponent } from './add-pet.component';

@NgModule({
  imports: [
    CommonModule,
    AddPetRoutingModule
  ],
  declarations: [AddPetComponent]
})
export class AddPetModule { }
