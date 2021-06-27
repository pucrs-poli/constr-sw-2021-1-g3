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
  title = 'courses-front-end';
  courses = [ 0, 0, 0, 0]
  course: ICourse;

  constructor(public dialog: MatDialog, private coursesService: CoursesService)
  {
    this.course = { id: 0, title: '', description: '', subjects: [] };
    //coursesService.getCourses().then(r => console.log(r));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CourseRegistrationDialog, {
      width: '500px',
      height: '670px'
    });

    //dialogRef.afterClosed().subscribe(result => {
    //  console.log('The dialog was closed');
      //this.animal = result;
    //});
  }
}
