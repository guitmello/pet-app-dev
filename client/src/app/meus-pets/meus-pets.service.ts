import { Injectable } from '@angular/core';
import { MeusPets } from './meus-pets';
import { MeusPetsComponent } from './meus-pets.component';
import { EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ModalDeletePetComponent } from './modal-delete-pet/modal-delete-pet.component';

@Injectable()
export class MeusPetsService {

  emitirId = new EventEmitter<number>();

  constructor(meusPets: MeusPets, public dialog: MatDialog) {

  }

  emitirDelete(id: number) {
    this.emitirId.emit(id);
  }

}
