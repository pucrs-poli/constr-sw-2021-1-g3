import { Component, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { ISubject } from "src/interfaces/subject.interface";

import { SubjectsService } from "src/services/subjects.service";
import {ILession} from "../../../../interfaces/lession.interface";

@Component({
    selector: 'subject-edit',
    templateUrl: 'subject-edit.html',
    styleUrls: ['subject-edit.scss']
})
export class SubjectEditDialog {
    subject: ISubject;

    constructor(public dialogRef: MatDialogRef<SubjectEditDialog>,
        @Inject(MAT_DIALOG_DATA) public data: ISubject[],
        private subjectsService: SubjectsService,
        private lessionDialog: MatDialog) {
        this.subject = {
            id: 0,
            title: '',
            description: '',
            lessions: []
        }
    }

    onAddLession() {}

    async onEditSubject(): Promise<void> {
      await this.subjectsService.editSubject(this.subject)
      this.onCloseDialog();
    }

    onRemoveLession(lession: ILession): void {
      this.subject.lessions = this.subject.lessions.filter((l) => l.id !== lession.id)
    }

    onCloseDialog(): void {
        this.dialogRef.close();
    }
}
