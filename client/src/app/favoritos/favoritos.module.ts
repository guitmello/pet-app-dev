import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritosRoutingModule } from './favoritos-routing.module';
import { FavoritosComponent } from './favoritos.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    FavoritosRoutingModule,
    MatCardModule,
  ],
  declarations: [FavoritosComponent]
})
export class FavoritosModule { }
