import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPfisicaRoutingModule } from './add-pfisica-routing.module';
import { AddPfisicaComponent } from './add-pfisica.component';

@NgModule({
  imports: [
    CommonModule,
    AddPfisicaRoutingModule
  ],
  declarations: [AddPfisicaComponent]
})
export class AddPfisicaModule { }
