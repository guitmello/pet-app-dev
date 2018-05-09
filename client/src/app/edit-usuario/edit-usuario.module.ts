import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditUsuarioRoutingModule } from './edit-usuario-routing.module';
import { EditUsuarioComponent } from './edit-usuario.component';

@NgModule({
  imports: [
    CommonModule,
    EditUsuarioRoutingModule
  ],
  declarations: [EditUsuarioComponent]
})
export class EditUsuarioModule { }
