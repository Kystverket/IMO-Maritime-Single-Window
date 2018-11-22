import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerListingTableComponent } from './passenger-listing-table.component';

describe('PortCallCrewListingComponent', () => {
  let component: PassengerListingTableComponent;
  let fixture: ComponentFixture<PassengerListingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerListingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerListingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
