import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewListingTableComponent } from './crew-listing-table.component';

describe('PortCallCrewListingComponent', () => {
  let component: CrewListingTableComponent;
  let fixture: ComponentFixture<CrewListingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewListingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewListingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
