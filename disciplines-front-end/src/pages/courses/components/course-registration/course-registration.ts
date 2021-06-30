import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { ICourse } from 'src/interfaces/course.interface';
import { ISubject } from 'src/interfaces/subject.interface';
import { CoursesService } from 'src/services/courses.service';
import { SubjectsService } from 'src/services/subjects.service';
import { generateId } from 'src/utils';

@Component({
  selector: 'course-registration',
  templateUrl: 'course-registration.html',
  styleUrls: ['course-registration.scss']
})
export class CourseRegistrationDialog {
    showSubject: boolean;
    course: ICourse;
    subjects: ISubject[];
    selectedSubjects: number[];

    constructor(
    public dialogRef: MatDialogRef<CourseRegistrationDialog>,
      //private coursesService: CoursesService,
      @Inject(MAT_DIALOG_DATA) public data: ICourse,
      private subjectsService: SubjectsService
    ) {
        this.course = this.data;
        this.selectedSubjects = [];
        this.subjects = subjectsService.getSubjects();
        this.showSubject = false;
    }

    onAddCourse(): void {
        //this.coursesService.addCourse(this.course);
        this.course.subjects = this.subjects.filter(s => this.selectedSubjects.includes(s.id));
        this.showSubject = !this.showSubject;
        this.onCloseDialog();
    }

    onEditCourse(): void {

    }

    onCloseDialog(): void {
        this.dialogRef.close();
    }
}
