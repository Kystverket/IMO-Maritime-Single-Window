import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortCallRegistrationFormsComponent } from './port-call-registration-forms.component';

describe('PortCallRegistrationFormsComponent', () => {
  let component: PortCallRegistrationFormsComponent;
  let fixture: ComponentFixture<PortCallRegistrationFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortCallRegistrationFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortCallRegistrationFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
