import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPjuridicaRoutingModule } from './add-pjuridica-routing.module';
import { AddPjuridicaComponent } from './add-pjuridica.component';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  imports: [
    CommonModule,
    AddPjuridicaRoutingModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule
  ],
  declarations: [AddPjuridicaComponent]
})
export class AddPjuridicaModule { }
