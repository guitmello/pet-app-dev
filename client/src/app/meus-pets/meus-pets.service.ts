import { Injectable } from '@angular/core';
import { MeusPets } from './meus-pets';
import { EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ModalDeletePetComponent } from './modal-delete-pet/modal-delete-pet.component';

@Injectable()
export class MeusPetsService {

  emitirId = new EventEmitter<number>();

  constructor(meusPets: MeusPets, public dialog: MatDialog) {

  }

  openDialog(id: number) {
    this.emitirId.emit(id);
    let dialogRef = this.dialog.open(ModalDeletePetComponent, {
      width: '300px',
      height: '210px',
      data: {}
    });
  }

}
