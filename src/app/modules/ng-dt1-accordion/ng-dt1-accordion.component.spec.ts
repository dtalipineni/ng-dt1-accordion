import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDt1AccordionComponent } from './ng-dt1-accordion.component';

describe('NgDt1AccordionComponent', () => {
  let component: NgDt1AccordionComponent;
  let fixture: ComponentFixture<NgDt1AccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDt1AccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDt1AccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
