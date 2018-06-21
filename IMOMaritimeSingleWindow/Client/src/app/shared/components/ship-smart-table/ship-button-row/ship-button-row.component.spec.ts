import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipButtonRowComponent } from './ship-button-row.component';

describe('ShipButtonRowComponent', () => {
  let component: ShipButtonRowComponent;
  let fixture: ComponentFixture<ShipButtonRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipButtonRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipButtonRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
