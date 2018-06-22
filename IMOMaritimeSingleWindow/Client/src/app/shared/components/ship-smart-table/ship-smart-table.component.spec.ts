import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipSmartTableComponent } from './ship-smart-table.component';

describe('ShipSmartTableComponent', () => {
  let component: ShipSmartTableComponent;
  let fixture: ComponentFixture<ShipSmartTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipSmartTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipSmartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
