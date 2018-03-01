import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrerShipComponent } from './registrer-ship.component';

describe('RegistrerShipComponent', () => {
  let component: RegistrerShipComponent;
  let fixture: ComponentFixture<RegistrerShipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrerShipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrerShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
