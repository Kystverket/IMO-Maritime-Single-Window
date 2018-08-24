import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerInfoTableComponent } from './passenger-info-table.component';

describe('PassengerInfoTableComponent', () => {
  let component: PassengerInfoTableComponent;
  let fixture: ComponentFixture<PassengerInfoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerInfoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerInfoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
