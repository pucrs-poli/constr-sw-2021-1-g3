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
    // const response = await this.coursesService.getCourses();
    // console.log(response)

    this.courses =  [
      {
        _id: "60d297edffc1a507a4efbdd1",
        title: 'Engenharia Orientada a Modelos',
        description: 'A cadeira nao requer presenca',
        subjects: [],
      },
      {
        _id: "60d29d2a7f957314ec0663da",
        title: 'Construcao de Software',
        description: 'Disciplina semelhante a AGES',
        subjects: [],
      }
    ]
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
}
