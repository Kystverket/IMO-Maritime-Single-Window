import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipStoresListingTableComponent } from './ship-stores-listing-table.component';

describe('ShipStoesListingTableComponent', () => {
  let component: ShipStoresListingTableComponent;
  let fixture: ComponentFixture<ShipStoresListingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipStoresListingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipStoresListingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
