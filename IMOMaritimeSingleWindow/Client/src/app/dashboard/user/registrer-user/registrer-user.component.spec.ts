import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrerUserComponent } from './registrer-user.component';

describe('RegistrerUserComponent', () => {
  let component: RegistrerUserComponent;
  let fixture: ComponentFixture<RegistrerUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrerUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
