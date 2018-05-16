import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditUsuarioRoutingModule } from './edit-usuario-routing.module';
import { EditUsuarioComponent } from './edit-usuario.component';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    EditUsuarioRoutingModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule
  ],
  declarations: [EditUsuarioComponent]
})
export class EditUsuarioModule { }
