import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrerCompanyComponent } from './registrer-company.component';

describe('RegistrerCompanyComponent', () => {
  let component: RegistrerCompanyComponent;
  let fixture: ComponentFixture<RegistrerCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrerCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrerCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
