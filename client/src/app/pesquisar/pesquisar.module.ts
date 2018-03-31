import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PesquisarRoutingModule } from './pesquisar-routing.module';
import { PesquisarComponent } from './pesquisar.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    PesquisarRoutingModule,
    MatCardModule,
  ],
  declarations: [PesquisarComponent]
})
export class PesquisarModule { }
