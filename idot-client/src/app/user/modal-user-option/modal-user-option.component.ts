import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-user-option',
  templateUrl: './modal-user-option.component.html',
  styleUrls: ['./modal-user-option.component.scss']
})
export class ModalUserOptionComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalUserOptionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public router: Router
  ) { }

  ngOnInit() {
  }

  goTo(route: string) {
    if (route === 'fisico') {
      this.dialogRef.close();
      this.router.navigateByUrl('usuario-fisico');
    } else if (route === 'juridico') {
      this.dialogRef.close();
      this.router.navigateByUrl('usuario-juridico');
    }
  }

}
