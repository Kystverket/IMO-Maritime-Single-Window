import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoDescriptionComponent } from './cargo-description.component';

describe('CargoDescriptionComponent', () => {
  let component: CargoDescriptionComponent;
  let fixture: ComponentFixture<CargoDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargoDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
