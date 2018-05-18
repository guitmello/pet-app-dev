import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddFastPetRoutingModule } from './add-fast-pet-routing.module';
import { AddFastPetComponent } from './add-fast-pet.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    AddFastPetRoutingModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
  ],
  declarations: [AddFastPetComponent]
})
export class AddFastPetModule { }
