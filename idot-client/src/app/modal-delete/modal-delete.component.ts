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
    this.petService.deletePet(this.data.id).subscribe(destroy => {
      this.removePet(this.data);
      console.log('Deletado');
      this.dialogRef.close();
    });
  }

  removePet(pet: Pet) {
    console.log(pet);
    this.pets.splice(this.pets.indexOf(pet), 1);
  }

}
