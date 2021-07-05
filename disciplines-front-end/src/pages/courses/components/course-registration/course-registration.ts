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
      private coursesService: CoursesService,
      @Inject(MAT_DIALOG_DATA) public data: ICourse,
      private subjectsService: SubjectsService
    ) {
        this.course = this.data;
        this.selectedSubjects = [];
        this.subjects = []
        this.showSubject = false;
    }

    ngOnInit() {
      this.getCourseSubject()
    }

    async getCourseSubject() {
      const { data } = await this.subjectsService.getCourseSubjects(this.course);
      this.subjects = data
    }

    async onAddCourse(): Promise<void> {
        await this.coursesService.addCourse(this.course);
        return
    }

    onCloseDialog(): void {
        this.dialogRef.close();
    }
}
