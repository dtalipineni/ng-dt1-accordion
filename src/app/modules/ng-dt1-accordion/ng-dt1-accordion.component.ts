import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-dt1-accordion',
  templateUrl: './ng-dt1-accordion.component.html',
  styleUrls: ['./ng-dt1-accordion.component.css'],
  inputs: ['accordionData', 'accordionTitle']
})
export class NgDt1AccordionComponent implements OnInit {
  accordionData: string;
  accordionTitle: string;
  selection: {
     active: string
  };
  constructor() {
}

  ngOnInit() {
    this.selection = {
       active: null
      };
  }

}
