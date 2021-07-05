import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ICourse } from 'src/interfaces/course.interface';
import { CoursesService } from 'src/services/courses.service';
import { CourseRegistrationDialog } from './components/course-registration/course-registration';
import {CourseEditDialog} from "./components/course-edit/course-edit";

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses: ICourse[];

  constructor(public dialog: MatDialog,
    private coursesService: CoursesService) {
    this.courses = [];
  }

  ngOnInit() {
    this.getCourses()
  }

  async getCourses(): Promise<void> {
    const response = await this.coursesService.getCourses();
    console.log(response)
    this.courses = [...response.data]
  }

  addCourse = (): void => {
    const dialogRef = this.dialog.open(CourseRegistrationDialog, {
      width: '500px',
      height: '620px',
      data: this.courses
    });
  }

  editCourse = async (course: ICourse): Promise<void> => {
    const dialogRef = this.dialog.open(CourseEditDialog, {
      width: '500px',
      height: '620px',
      data: course
    });
  }

  deleteCourse = async (course: ICourse): Promise<void> => {
    await this.coursesService.removeCourse(course._id)
  }
}
