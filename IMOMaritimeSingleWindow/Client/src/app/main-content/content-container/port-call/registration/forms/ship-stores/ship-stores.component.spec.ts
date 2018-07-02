import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipStoresComponent } from './ship-stores.component';

describe('ShipStoresComponent', () => {
  let component: ShipStoresComponent;
  let fixture: ComponentFixture<ShipStoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipStoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
