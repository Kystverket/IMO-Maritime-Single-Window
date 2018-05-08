import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationViewComponent } from './confirmation-view.component';

describe('ConfirmationViewComponent', () => {
  let component: ConfirmationViewComponent;
  let fixture: ComponentFixture<ConfirmationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
