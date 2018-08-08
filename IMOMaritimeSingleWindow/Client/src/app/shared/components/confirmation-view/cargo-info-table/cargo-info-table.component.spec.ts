import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoInfoTableComponent } from './cargo-info-table.component';

describe('CargoInfoTableComponent', () => {
  let component: CargoInfoTableComponent;
  let fixture: ComponentFixture<CargoInfoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargoInfoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoInfoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
