import {Component, Inject} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { ICourse } from 'src/interfaces/course.interface';
import { ISubject } from 'src/interfaces/subject.interface';
import { generateId } from 'src/utils';
import { LessionRegistrationDialog } from '../lession-registration/lession-registration';

@Component({
  selector: 'course-registration',
  templateUrl: 'course-registration.html',
  styleUrls: ['./course-registration.scss']
})
export class CourseRegistrationDialog {
    //subjects: FormGroup;
    showSubject: boolean;
    subject: ISubject;
    course: ICourse;

    constructor(
        public dialogRef: MatDialogRef<CourseRegistrationDialog>,
        private lessionDialog: MatDialog)
        //@Inject(MAT_DIALOG_DATA) public data: ICourse)
        {
            this.course = {
                id: 0,
                title: '',
                description: '',
                subjects: []
            };

            this.subject = {
                id: 0,
                title: '',
                description: '',
                lessions: []
            }

            this.showSubject = false;
            //this.subjects = this.fb.group({
            //    title: [''],
            //    description: [''],
            //    subjects: this.fb.array([
            //        this.fb.control('')
            //    ])
            //});
        }

    onAddSubject(): void {
        this.subject.id = generateId();
        this.course.subjects.push(this.subject);
    }

    onAddCourse(): void {
        this.course.id = generateId();
    }

    onAddLession(): void {
        this.lessionDialog.open(LessionRegistrationDialog, {
            width: '300px',
            height: '200px'
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}