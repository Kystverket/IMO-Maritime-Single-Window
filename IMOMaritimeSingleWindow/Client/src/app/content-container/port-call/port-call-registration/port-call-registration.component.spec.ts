import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortCallRegistrationComponent } from './port-call-registration.component';

describe('PortCallRegistrationComponent', () => {
  let component: PortCallRegistrationComponent;
  let fixture: ComponentFixture<PortCallRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortCallRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortCallRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
