import { Component } from "@angular/core";
import { ISubject } from "src/interfaces/subject.interface";

@Component({
    selector: 'subjects',
    templateUrl: 'subjects.component.html',
    styleUrls: ['subjects.component.scss']
  })
export class SubjectsComponent {
  subjects: ISubject[];

  constructor() {
    this.subjects = [];
  }
  addSubject = (): void => {

  }
}