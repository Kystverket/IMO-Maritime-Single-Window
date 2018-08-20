import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySecurityOfficerComponent } from './company-security-officer.component';

describe('CompanySecurityOfficerComponent', () => {
  let component: CompanySecurityOfficerComponent;
  let fixture: ComponentFixture<CompanySecurityOfficerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanySecurityOfficerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySecurityOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
