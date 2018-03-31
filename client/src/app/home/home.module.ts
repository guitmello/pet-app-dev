import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
