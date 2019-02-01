import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipStoresErrorModalComponent } from './ship-stores-error-modal.component';

describe('ShipStoresErrorModalComponent', () => {
  let component: ShipStoresErrorModalComponent;
  let fixture: ComponentFixture<ShipStoresErrorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipStoresErrorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipStoresErrorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
