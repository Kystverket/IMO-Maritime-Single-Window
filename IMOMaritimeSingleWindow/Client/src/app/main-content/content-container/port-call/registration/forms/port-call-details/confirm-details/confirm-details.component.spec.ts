import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDetailsComponent } from './confirm-details.component';

describe('ConfirmDetailsComponent', () => {
  let component: ConfirmDetailsComponent;
  let fixture: ComponentFixture<ConfirmDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
