import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerListErrorModalComponent } from './passenger-list-error-modal.component';

describe('PassengerListErrorModalComponent', () => {
  let component: PassengerListErrorModalComponent;
  let fixture: ComponentFixture<PassengerListErrorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerListErrorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerListErrorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
