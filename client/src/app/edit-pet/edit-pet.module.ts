import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditPetRoutingModule } from './edit-pet-routing.module';
import { EditPetComponent } from './edit-pet.component';

@NgModule({
  imports: [
    CommonModule,
    EditPetRoutingModule
  ],
  declarations: [EditPetComponent]
})
export class EditPetModule { }
