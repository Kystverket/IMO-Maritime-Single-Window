import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoItemFormComponent } from './cargo-item-form.component';

describe('CargoItemFormComponent', () => {
  let component: CargoItemFormComponent;
  let fixture: ComponentFixture<CargoItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargoItemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
