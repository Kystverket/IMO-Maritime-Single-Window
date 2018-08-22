import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Last10PortCallsComponent } from './last-10-port-calls.component';

describe('Last10PortCallsComponent', () => {
  let component: Last10PortCallsComponent;
  let fixture: ComponentFixture<Last10PortCallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Last10PortCallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Last10PortCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
