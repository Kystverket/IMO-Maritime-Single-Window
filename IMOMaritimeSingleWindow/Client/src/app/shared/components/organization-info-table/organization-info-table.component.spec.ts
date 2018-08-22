import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationInfoTableComponent } from './organization-info-table.component';

describe('OrganizationInfoTableComponent', () => {
  let component: OrganizationInfoTableComponent;
  let fixture: ComponentFixture<OrganizationInfoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationInfoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationInfoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
