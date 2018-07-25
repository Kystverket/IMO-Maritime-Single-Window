import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPortOfEmbarkationComponent } from './find-port-of-embarkation.component';

describe('FindPortOfEmbarkationComponent', () => {
  let component: FindPortOfEmbarkationComponent;
  let fixture: ComponentFixture<FindPortOfEmbarkationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPortOfEmbarkationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPortOfEmbarkationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
