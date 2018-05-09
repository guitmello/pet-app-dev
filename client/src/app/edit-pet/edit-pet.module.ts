import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditPetRoutingModule } from './edit-pet-routing.module';
import { EditPetComponent } from './edit-pet.component';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    EditPetRoutingModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
  ],
  declarations: [EditPetComponent]
})
export class EditPetModule { }
