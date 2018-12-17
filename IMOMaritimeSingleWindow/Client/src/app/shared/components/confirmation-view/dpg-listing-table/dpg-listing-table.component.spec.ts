import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DpgListingTableComponent } from './dpg-listing-table.component';

describe('DpgListingTableComponent', () => {
  let component: DpgListingTableComponent;
  let fixture: ComponentFixture<DpgListingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DpgListingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DpgListingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
