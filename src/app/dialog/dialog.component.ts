import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SingleTicketComponent } from '../single-ticket/single-ticket.component';
export interface DialogData {
  confirm: boolean;
}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  constructor(
    public dialogRef: MatDialogRef<SingleTicketComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick() {
    this.dialogRef.close();
  }

  onYesClick(){
    this.data.confirm = true;
    this.dialogRef.close(this.data.confirm);
  }

}
