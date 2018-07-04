import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPortComponent } from './find-port.component';

describe('FindPortComponent', () => {
  let component: FindPortComponent;
  let fixture: ComponentFixture<FindPortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
