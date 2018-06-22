import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationButtonRowComponent } from './location-button-row.component';

describe('LocationButtonRowComponent', () => {
  let component: LocationButtonRowComponent;
  let fixture: ComponentFixture<LocationButtonRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationButtonRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationButtonRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
