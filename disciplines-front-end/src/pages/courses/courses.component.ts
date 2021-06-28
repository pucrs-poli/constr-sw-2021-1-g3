import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ICourse } from 'src/interfaces/course.interface';
import { CoursesService } from 'src/services/courses.service';
import { CourseRegistrationDialog } from './components/course-registration/course-registration';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses: ICourse[];

  constructor(public dialog: MatDialog,
    private coursesService: CoursesService) {
    this.courses = coursesService.getCourses();
  }

  addCourse = (): void => {
    const dialogRef = this.dialog.open(CourseRegistrationDialog, {
      width: '500px',
      height: '620px',
      data: this.courses
    });
  }
}
