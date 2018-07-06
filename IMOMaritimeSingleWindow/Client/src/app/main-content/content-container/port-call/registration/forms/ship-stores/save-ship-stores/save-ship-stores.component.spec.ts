import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveShipStoresComponent } from './save-ship-stores.component';

describe('SaveShipStoresComponent', () => {
  let component: SaveShipStoresComponent;
  let fixture: ComponentFixture<SaveShipStoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveShipStoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveShipStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
