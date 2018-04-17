import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortCallComponent } from './port-call.component';

describe('PortCallComponent', () => {
  let component: PortCallComponent;
  let fixture: ComponentFixture<PortCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
