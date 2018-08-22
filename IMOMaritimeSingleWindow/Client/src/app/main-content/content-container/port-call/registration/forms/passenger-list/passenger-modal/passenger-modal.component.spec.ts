import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerModalComponent } from './passenger-modal.component';

describe('PassengerModalComponent', () => {
  let component: PassengerModalComponent;
  let fixture: ComponentFixture<PassengerModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
