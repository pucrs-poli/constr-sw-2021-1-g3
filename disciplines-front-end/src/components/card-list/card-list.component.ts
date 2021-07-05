import { Component, Input } from "@angular/core";
import {ICourse} from "../../interfaces/course.interface";

@Component({
    selector: 'card-list',
    templateUrl: './card-list.component.html',
    styleUrls: ['./card-list.component.scss']
  })
  export class CardListComponent {
    @Input() public pageName!: string;
    @Input() public pageDescription!: string;
    @Input() public contents!: any[];
    @Input() public onAddContent!: () => void;
    @Input() public onEditContent!: (course: ICourse) => void;
    @Input() public onDeleteContent!: (course: ICourse) => void;
  }
