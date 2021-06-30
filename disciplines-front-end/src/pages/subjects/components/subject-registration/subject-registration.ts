import { Component, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { ISubject } from "src/interfaces/subject.interface";
import { LessionRegistrationDialog } from "src/pages/subjects/components/lession-registration/lession-registration";
import { SubjectsService } from "src/services/subjects.service";

@Component({
    selector: 'subject-registration',
    templateUrl: 'subject-registration.html',
    styleUrls: ['subject-registration.scss']
})
export class SubjectRegistrationDialog {
    subject: ISubject;
    
    constructor(public dialogRef: MatDialogRef<SubjectRegistrationDialog>,
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

    onAddSubject(): void {
        this.subject = this.subjectsService.addSubject(this.subject);
        this.onCloseDialog();
    }

    onRemoveLession(id: number): void {
        this.subject.lessions = this.subject.lessions.filter(l => l.id != id);
    }

    onAddLession(): void {
        this.lessionDialog.open(LessionRegistrationDialog, {
            width: '300px',
            height: '200px',
            data: this.subject
        });
    }

    onCloseDialog(): void {
        this.dialogRef.close();
    }
}