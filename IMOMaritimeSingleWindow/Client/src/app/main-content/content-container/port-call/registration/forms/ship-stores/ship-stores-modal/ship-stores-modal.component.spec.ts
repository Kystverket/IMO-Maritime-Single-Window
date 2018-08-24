import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipStoresModalComponent } from './ship-stores-modal.component';

describe('ShipStoresModalComponent', () => {
  let component: ShipStoresModalComponent;
  let fixture: ComponentFixture<ShipStoresModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipStoresModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipStoresModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
