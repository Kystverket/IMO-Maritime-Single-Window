import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPortOfDisembarkationComponent } from './find-port-of-disembarkation.component';

describe('FindPortOfDisembarkationComponent', () => {
  let component: FindPortOfDisembarkationComponent;
  let fixture: ComponentFixture<FindPortOfDisembarkationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPortOfDisembarkationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPortOfDisembarkationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
