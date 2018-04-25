import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { Usuario } from './usuario';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ModalAddPComponent } from './modal-add-p/modal-add-p.component';
import { MatDialog, MatDialogRef } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    HttpClient,
    Usuario,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialog,
    MatDialogRef,
    ModalAddPComponent,
    Md5
  ],
  declarations: [LoginComponent],
  entryComponents: [ModalAddPComponent]
})
export class LoginModule { }

