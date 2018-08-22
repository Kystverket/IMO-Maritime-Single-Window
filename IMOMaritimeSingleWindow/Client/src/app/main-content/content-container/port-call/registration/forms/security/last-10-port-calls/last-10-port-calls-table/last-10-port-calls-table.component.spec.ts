import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Last10PortCallsTableComponent } from './last-10-port-calls-table.component';

describe('Last10PortCallsTableComponent', () => {
  let component: Last10PortCallsTableComponent;
  let fixture: ComponentFixture<Last10PortCallsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Last10PortCallsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Last10PortCallsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
