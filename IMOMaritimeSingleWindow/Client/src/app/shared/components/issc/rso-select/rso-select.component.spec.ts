import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsoSelectComponent } from './rso-select.component';

describe('RsoSelectComponent', () => {
  let component: RsoSelectComponent;
  let fixture: ComponentFixture<RsoSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsoSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsoSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
