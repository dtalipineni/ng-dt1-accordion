import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-dt1-accordion';
  inputAccordionData = [{
  name: 'Red',
  sub: [{
    name: 'Scarlet'
  }, {
    name: 'Carmine'
  }, {
    name: 'Crimson'
  },{
    name: 'Cinnabar'
  }]
}, {
  name: 'Green',
  sub: [{
    name: 'Chartreuse'
  },{
    name: 'Malachite'
  }]
}, {
  name: 'Blue',
  sub: [{
    name: 'Cyan'
  }, {
    name: 'Periwinkle'
  }, {
    name: 'Ultramarine'
  }]
}];
inputAccordionTitle = 'Sample Basic Accordion - Color Classification';
}
