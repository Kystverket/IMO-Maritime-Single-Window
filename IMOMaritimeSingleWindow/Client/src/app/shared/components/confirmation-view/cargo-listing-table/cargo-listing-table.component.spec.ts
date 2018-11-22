import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoListingTableComponent } from './cargo-listing-table.component';

describe('PortCallCrewListingComponent', () => {
  let component: CargoListingTableComponent;
  let fixture: ComponentFixture<CargoListingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargoListingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoListingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
