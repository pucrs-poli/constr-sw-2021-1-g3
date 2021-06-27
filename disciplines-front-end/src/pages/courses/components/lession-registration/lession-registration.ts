import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: 'lession-registration',
    templateUrl: 'lession-registration.html',
    styleUrls: ['lession-registration.scss']
  })
export class LessionRegistrationDialog{
    constructor(
        public dialogRef: MatDialogRef<LessionRegistrationDialog>
    ){}

    onNoClick(): void {
        this.dialogRef.close();
    }
}