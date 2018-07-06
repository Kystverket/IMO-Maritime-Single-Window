import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationSmartTableComponent } from './organization-smart-table.component';

describe('OrganizationSmartTableComponent', () => {
  let component: OrganizationSmartTableComponent;
  let fixture: ComponentFixture<OrganizationSmartTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationSmartTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationSmartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
