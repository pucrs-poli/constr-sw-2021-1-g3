import {Component, Inject} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface ILession {
    id: number;
    name: string;
}

export interface ISubject {
    id: number; 
    title: string;
    description: string;
    lessions: ILession[];
}

export interface ICourse {
    id: number; 
    title: string;
    description: string;
    subjects: ISubject[];
}

@Component({
  selector: 'course-registration',
  templateUrl: 'course-registration.html',
  styleUrls: ['./course-registration.scss']
})
export class CourseRegistrationDialog {

    panelOpenState = false;
    subjects = this.fb.group({
        title: [''],
        description: [''],
    });

    constructor(
        public dialogRef: MatDialogRef<CourseRegistrationDialog>,
        private fb: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public data: ICourse) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}