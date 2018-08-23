import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsscComponent } from './issc.component';

describe('IsscComponent', () => {
  let component: IsscComponent;
  let fixture: ComponentFixture<IsscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
