import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCountryOfBirthComponent } from './find-country-of-birth.component';

describe('FindCountryComponent', () => {
  let component: FindCountryOfBirthComponent;
  let fixture: ComponentFixture<FindCountryOfBirthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCountryOfBirthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCountryOfBirthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
