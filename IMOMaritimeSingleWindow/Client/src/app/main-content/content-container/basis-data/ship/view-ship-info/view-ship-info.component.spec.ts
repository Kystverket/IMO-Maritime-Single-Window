import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewShipInfoComponent } from './view-ship-info.component';

describe('ViewShipInfoComponent', () => {
  let component: ViewShipInfoComponent;
  let fixture: ComponentFixture<ViewShipInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewShipInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewShipInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
