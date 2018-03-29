import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPjuridicaRoutingModule } from './add-pjuridica-routing.module';
import { AddPjuridicaComponent } from './add-pjuridica.component';

@NgModule({
  imports: [
    CommonModule,
    AddPjuridicaRoutingModule
  ],
  declarations: [AddPjuridicaComponent]
})
export class AddPjuridicaModule { }
