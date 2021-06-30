import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ISubject } from "src/interfaces/subject.interface";
import { SubjectsService } from "src/services/subjects.service";
import { SubjectRegistrationDialog } from "./components/subject-registration/subject-registration";

@Component({
    selector: 'subjects',
    templateUrl: 'subjects.component.html',
    styleUrls: ['subjects.component.scss']
  })
export class SubjectsComponent {
  subjects: ISubject[];

  constructor(public dialog: MatDialog,
    private subjectsService: SubjectsService) {
    this.subjects = subjectsService.getSubjects();
  }

  addSubject = (): void => {
    const dialogRef = this.dialog.open(SubjectRegistrationDialog, {
      width: '500px',
      height: '670px',
      data: this.subjects
    });
  }
}