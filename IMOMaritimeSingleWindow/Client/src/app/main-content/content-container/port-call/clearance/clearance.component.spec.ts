import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearanceComponent } from './clearance.component';

describe('ClearanceComponent', () => {
  let component: ClearanceComponent;
  let fixture: ComponentFixture<ClearanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
