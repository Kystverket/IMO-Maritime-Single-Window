import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterLocationComponent } from './register-location.component';

describe('RegisterLocationComponent', () => {
  let component: RegisterLocationComponent;
  let fixture: ComponentFixture<RegisterLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
