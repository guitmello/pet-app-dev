import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class NotificationService {

  constructor(private snackBar: MatSnackBar) { }

  notification(message) {
    this.snackBar.open(message, 'OK', {
        duration: 2000,
    });
  }

}
