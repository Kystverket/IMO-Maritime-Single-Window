import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetActualTimeComponent } from './set-actual-time.component';

describe('SetActualTimeComponent', () => {
  let component: SetActualTimeComponent;
  let fixture: ComponentFixture<SetActualTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetActualTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetActualTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
