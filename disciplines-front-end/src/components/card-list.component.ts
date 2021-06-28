import { Component, Input } from "@angular/core";

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
  }