import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';


import { CoursesService } from 'src/services/courses.service';
import { CoursesComponent } from '../pages/courses/courses.component';
import { CourseRegistrationDialog } from 'src/pages/courses/components/course-registration/course-registration';
import { LessionRegistrationDialog } from 'src/pages/courses/components/lession-registration/lession-registration';
import { SubjectsComponent } from 'src/pages/subjects/subjects.component';
import { CardListComponent } from 'src/components/card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseRegistrationDialog,
    LessionRegistrationDialog,
    SubjectsComponent,
    CardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatToolbarModule
  ],
  entryComponents:[],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
