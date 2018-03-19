import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrerLocationComponent } from './registrer-location.component';

describe('RegistrerLocationComponent', () => {
  let component: RegistrerLocationComponent;
  let fixture: ComponentFixture<RegistrerLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrerLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrerLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
