import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipToShipActivityComponent } from './ship-to-ship-activity.component';

describe('ShipToShipActivityComponent', () => {
  let component: ShipToShipActivityComponent;
  let fixture: ComponentFixture<ShipToShipActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipToShipActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipToShipActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
