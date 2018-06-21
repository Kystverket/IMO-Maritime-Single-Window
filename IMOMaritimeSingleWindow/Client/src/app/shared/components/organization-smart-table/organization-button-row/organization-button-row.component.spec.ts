import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationButtonRowComponent } from './organization-button-row.component';

describe('OrganizationButtonRowComponent', () => {
  let component: OrganizationButtonRowComponent;
  let fixture: ComponentFixture<OrganizationButtonRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationButtonRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationButtonRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
