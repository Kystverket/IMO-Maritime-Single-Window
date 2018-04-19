import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPortCallComponent } from './view-port-call.component';

describe('ViewPortCallComponent', () => {
  let component: ViewPortCallComponent;
  let fixture: ComponentFixture<ViewPortCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPortCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPortCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
