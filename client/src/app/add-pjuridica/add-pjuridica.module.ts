import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPjuridicaRoutingModule } from './add-pjuridica-routing.module';
import { AddPjuridicaComponent } from './add-pjuridica.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    AddPjuridicaRoutingModule,
    MatCardModule,
  ],
  declarations: [AddPjuridicaComponent]
})
export class AddPjuridicaModule { }
