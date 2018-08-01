import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDateComponent } from './select-date.component';

describe('SelectDateComponent', () => {
  let component: SelectDateComponent;
  let fixture: ComponentFixture<SelectDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
