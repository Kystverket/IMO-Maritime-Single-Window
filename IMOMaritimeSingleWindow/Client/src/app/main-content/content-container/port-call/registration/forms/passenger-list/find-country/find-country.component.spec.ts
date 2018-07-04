import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCountryComponent } from './find-country.component';

describe('FindCountryComponent', () => {
  let component: FindCountryComponent;
  let fixture: ComponentFixture<FindCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
