import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipInfoTableComponent } from './ship-info-table.component';

describe('ShipInfoTableComponent', () => {
  let component: ShipInfoTableComponent;
  let fixture: ComponentFixture<ShipInfoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipInfoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipInfoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
