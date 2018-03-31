import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPfisicaRoutingModule } from './add-pfisica-routing.module';
import { AddPfisicaComponent } from './add-pfisica.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    AddPfisicaRoutingModule,
    MatCardModule,
  ],
  declarations: [AddPfisicaComponent]
})
export class AddPfisicaModule { }
