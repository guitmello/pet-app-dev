import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MeusPetsRoutingModule } from './meus-pets-routing.module';
import { MeusPetsComponent } from './meus-pets.component';
import { ModalDeletePetComponent } from './modal-delete-pet/modal-delete-pet.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  imports: [
    CommonModule,
    MeusPetsRoutingModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
    MatDialog,
    MatDialogRef
  ],
  declarations: [MeusPetsComponent, ModalDeletePetComponent]
})
export class MeusPetsModule { }
