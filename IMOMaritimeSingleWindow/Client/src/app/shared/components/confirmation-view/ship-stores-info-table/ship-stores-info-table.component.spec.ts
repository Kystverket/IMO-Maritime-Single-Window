import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipStoresInfoTableComponent } from './ship-stores-info-table.component';

describe('ShipStoresInfoTableComponent', () => {
  let component: ShipStoresInfoTableComponent;
  let fixture: ComponentFixture<ShipStoresInfoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipStoresInfoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipStoresInfoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
