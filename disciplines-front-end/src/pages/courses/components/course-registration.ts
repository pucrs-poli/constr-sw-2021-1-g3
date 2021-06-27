import {Component, Inject} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { ICourse } from 'src/interfaces/course.interface';

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

        const subject = {

        }
        this.data.subjects.push(

        );
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}