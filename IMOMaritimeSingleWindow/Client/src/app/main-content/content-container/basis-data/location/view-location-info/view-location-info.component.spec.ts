import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLocationInfoComponent } from './view-location-info.component';

describe('ViewLocationInfoComponent', () => {
  let component: ViewLocationInfoComponent;
  let fixture: ComponentFixture<ViewLocationInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLocationInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLocationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
