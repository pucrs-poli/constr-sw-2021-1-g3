import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoursesService } from 'src/services/courses.service';
import { CourseRegistrationDialog, ICourse, ISubject } from './components/course-registration';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent {
  title = 'courses-front-end';
  disciplinas = [1, 2, 3, 4, 5, 6, 7, 8]
  
  course: ICourse;

  constructor(public dialog: MatDialog, private coursesService: CoursesService)
  {
    this.course = { id:0, title:'', description:'', subjects:[] };
    //coursesService.getCourses().then(r => console.log(r));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CourseRegistrationDialog, {
      width: '500px',
      height: '670px',
      data: {
        title: this.course.title,
        descricao: this.course.description
      }
    });

    //dialogRef.afterClosed().subscribe(result => {
    //  console.log('The dialog was closed');
      //this.animal = result;
    //});
  }
}
