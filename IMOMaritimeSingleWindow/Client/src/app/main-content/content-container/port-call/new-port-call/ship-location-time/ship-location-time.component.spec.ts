import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipLocationTimeComponent } from './ship-location-time.component';

describe('ShipLocationTimeComponent', () => {
  let component: ShipLocationTimeComponent;
  let fixture: ComponentFixture<ShipLocationTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipLocationTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipLocationTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
