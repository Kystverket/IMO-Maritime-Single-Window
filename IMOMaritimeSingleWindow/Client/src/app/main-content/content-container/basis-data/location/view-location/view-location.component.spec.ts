import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLocationComponent } from './view-location.component';

describe('ViewLocationComponent', () => {
  let component: ViewLocationComponent;
  let fixture: ComponentFixture<ViewLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
