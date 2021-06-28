import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from 'src/pages/courses/courses.component';
import { SubjectsComponent } from 'src/pages/subjects/subjects.component';

const routes: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'subjects', component: SubjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
