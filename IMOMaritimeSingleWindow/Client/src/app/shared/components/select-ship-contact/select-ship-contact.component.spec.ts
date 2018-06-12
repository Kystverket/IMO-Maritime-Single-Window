import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectShipContactComponent } from './select-ship-contact.component';

describe('SelectShipContactComponent', () => {
  let component: SelectShipContactComponent;
  let fixture: ComponentFixture<SelectShipContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectShipContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectShipContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
