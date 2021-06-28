import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ILession } from "src/interfaces/lession.interface";
import { generateId } from "src/utils";

@Component({
    selector: 'lession-registration',
    templateUrl: 'lession-registration.html',
    styleUrls: ['lession-registration.scss']
  })
export class LessionRegistrationDialog{
    lession: ILession;

    constructor(
        public dialogRef: MatDialogRef<LessionRegistrationDialog>,
        @Inject(MAT_DIALOG_DATA) public data: ILession[]){
            this.lession = { id: 0, name: '' }
        }

    onAddLession(): void {
        this.lession.id = generateId();
        this.data.push(this.lession);
        this.onNoClick();
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}