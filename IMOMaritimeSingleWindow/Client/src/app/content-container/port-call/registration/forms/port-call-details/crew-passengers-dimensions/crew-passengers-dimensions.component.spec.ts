import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewPassengersDimensionsComponent } from './crew-passengers-dimensions.component';

describe('CrewPassengersDimensionsComponent', () => {
  let component: CrewPassengersDimensionsComponent;
  let fixture: ComponentFixture<CrewPassengersDimensionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewPassengersDimensionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewPassengersDimensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
