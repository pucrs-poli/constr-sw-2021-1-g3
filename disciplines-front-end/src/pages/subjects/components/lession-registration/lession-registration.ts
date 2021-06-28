import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ILession } from "src/interfaces/lession.interface";
import { ISubject } from "src/interfaces/subject.interface";
import { SubjectsService } from "src/services/subjects.service";

@Component({
    selector: 'lession-registration',
    templateUrl: 'lession-registration.html',
    styleUrls: ['lession-registration.scss']
  })
export class LessionRegistrationDialog{
    lession: ILession;

    constructor(public dialogRef: MatDialogRef<LessionRegistrationDialog>,
        @Inject(MAT_DIALOG_DATA) public data: ISubject,
        private subjectsService: SubjectsService) {
            this.lession = { id: 0, name: '' }
        }

    onAddLession(): void {
        this.data = this.subjectsService.addLession(this.data, this.lession);
        this.onCloseDialog();
    }

    onCloseDialog(): void {
        this.dialogRef.close();
    }
}