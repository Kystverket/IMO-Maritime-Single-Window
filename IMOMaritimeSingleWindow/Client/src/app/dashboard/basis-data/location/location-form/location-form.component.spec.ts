import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationFormComponent } from './location-form.component';

describe('LocationFormComponent', () => {
  let component: LocationFormComponent;
  let fixture: ComponentFixture<LocationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
