import {Component, Inject} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { v4 as uuidv4 } from 'uuid';
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
    subjects: FormGroup;
    showSubject: boolean;

    constructor(
        public dialogRef: MatDialogRef<CourseRegistrationDialog>,
        private fb: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public data: ICourse)
        {
            console.log(
                uuidv4()
            );
            this.showSubject = false;
            this.subjects = this.fb.group({
                title: [''],
                description: [''],
                subjects: this.fb.array([
                    this.fb.control('')
                ])
            });
        }

    onAddSubject(): void {
        
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}