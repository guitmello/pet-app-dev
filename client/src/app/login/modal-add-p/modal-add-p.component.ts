import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-add-p',
  templateUrl: './modal-add-p.component.html',
  styleUrls: ['./modal-add-p.component.css']
})
export class ModalAddPComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalAddPComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public router: Router, ) { }

  ngOnInit() {
  }

  goTo(route: string) {
    if (route === 'fisica') {
      this.dialogRef.close();
      this.router.navigate([`add-pfisica`]);
    } else if (route === 'juridica') {
      this.dialogRef.close();
      this.router.navigate([`add-pjuridica`]);
    }
  }
}
