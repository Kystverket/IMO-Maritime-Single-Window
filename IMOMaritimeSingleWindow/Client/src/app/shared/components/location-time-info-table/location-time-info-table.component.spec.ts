import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationTimeInfoTableComponent } from './location-time-info-table.component';

describe('LocationTimeInfoTableComponent', () => {
  let component: LocationTimeInfoTableComponent;
  let fixture: ComponentFixture<LocationTimeInfoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationTimeInfoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationTimeInfoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
