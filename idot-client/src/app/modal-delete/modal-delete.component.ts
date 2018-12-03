import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { PetService } from '../pet/pet.service';
import { Pet } from '../pet/pet.model';


@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss']
})
export class ModalDeleteComponent implements OnInit {

  pets: Pet[] = [];

  constructor(
    private petService: PetService,
    public dialogRef: MatDialogRef<ModalDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  cancel() {
    this.dialogRef.close();
  }

  deletePet() {
    console.log(this.data.pet.id);
    this.petService.deletePet(this.data.pet.id).subscribe(destroy => {
      this.removePet(this.data.pet);
      console.log('Deletado');
      this.dialogRef.close();
    });
  }

  removePet(pet: Pet) {
    this.petService.removePet(pet);
  }

}
