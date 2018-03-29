import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritosRoutingModule } from './favoritos-routing.module';
import { FavoritosComponent } from './favoritos.component';

@NgModule({
  imports: [
    CommonModule,
    FavoritosRoutingModule
  ],
  declarations: [FavoritosComponent]
})
export class FavoritosModule { }
