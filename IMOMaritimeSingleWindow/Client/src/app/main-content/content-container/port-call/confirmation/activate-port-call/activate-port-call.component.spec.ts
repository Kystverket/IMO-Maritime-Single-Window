import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatePortCallComponent } from './activate-port-call.component';

describe('ActivatePortCallComponent', () => {
  let component: ActivatePortCallComponent;
  let fixture: ComponentFixture<ActivatePortCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivatePortCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatePortCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
