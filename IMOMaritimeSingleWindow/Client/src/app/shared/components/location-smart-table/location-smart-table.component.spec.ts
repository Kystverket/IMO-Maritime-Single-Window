import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSmartTableComponent } from './location-smart-table.component';

describe('LocationSmartTableComponent', () => {
  let component: LocationSmartTableComponent;
  let fixture: ComponentFixture<LocationSmartTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationSmartTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationSmartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
