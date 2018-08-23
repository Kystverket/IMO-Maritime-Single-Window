import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipToShipActivityTableComponent } from './ship-to-ship-activity-table.component';

describe('ShipToShipActivityTableComponent', () => {
  let component: ShipToShipActivityTableComponent;
  let fixture: ComponentFixture<ShipToShipActivityTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipToShipActivityTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipToShipActivityTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
