import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DpgConfirmationViewComponent } from './dpg-confirmation-view.component';

describe('DpgConfirmationViewComponent', () => {
  let component: DpgConfirmationViewComponent;
  let fixture: ComponentFixture<DpgConfirmationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DpgConfirmationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DpgConfirmationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
