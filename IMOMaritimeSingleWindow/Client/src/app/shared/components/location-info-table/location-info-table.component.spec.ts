import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationInfoTableComponent } from './location-info-table.component';

describe('LocationInfoTableComponent', () => {
  let component: LocationInfoTableComponent;
  let fixture: ComponentFixture<LocationInfoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationInfoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationInfoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
