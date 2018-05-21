import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPfisicaRoutingModule } from './add-pfisica-routing.module';
import { AddPfisicaComponent } from './add-pfisica.component';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  imports: [
    CommonModule,
    FormBuilder,
    FormGroup,
    AddPfisicaRoutingModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule
  ],
  declarations: [AddPfisicaComponent]
})
export class AddPfisicaModule { }
