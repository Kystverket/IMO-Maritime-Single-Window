import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrganizationInfoComponent } from './view-organization-info.component';

describe('ViewOrganizationInfoComponent', () => {
  let component: ViewOrganizationInfoComponent;
  let fixture: ComponentFixture<ViewOrganizationInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOrganizationInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrganizationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
