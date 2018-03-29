import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PesquisarRoutingModule } from './pesquisar-routing.module';
import { PesquisarComponent } from './pesquisar.component';

@NgModule({
  imports: [
    CommonModule,
    PesquisarRoutingModule
  ],
  declarations: [PesquisarComponent]
})
export class PesquisarModule { }
