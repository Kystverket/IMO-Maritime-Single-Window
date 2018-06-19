import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearanceRowComponent } from './clearance-row.component';

describe('ClearanceRowComponent', () => {
  let component: ClearanceRowComponent;
  let fixture: ComponentFixture<ClearanceRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearanceRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearanceRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
