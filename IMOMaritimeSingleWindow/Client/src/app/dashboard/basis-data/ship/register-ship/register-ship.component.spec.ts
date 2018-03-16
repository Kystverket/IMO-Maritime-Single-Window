import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterShipComponent } from './register-ship.component';

describe('registerShipComponent', () => {
  let component: RegisterShipComponent;
  let fixture: ComponentFixture<RegisterShipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterShipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
