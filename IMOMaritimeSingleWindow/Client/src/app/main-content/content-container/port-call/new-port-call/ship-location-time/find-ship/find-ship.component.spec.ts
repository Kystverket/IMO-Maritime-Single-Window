import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindShipComponent } from './find-ship.component';

describe('FindShipComponent', () => {
  let component: FindShipComponent;
  let fixture: ComponentFixture<FindShipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindShipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
