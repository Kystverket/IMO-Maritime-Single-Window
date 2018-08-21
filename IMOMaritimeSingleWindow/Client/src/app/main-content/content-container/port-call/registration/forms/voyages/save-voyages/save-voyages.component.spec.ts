import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveVoyagesComponent } from './save-voyages.component';

describe('SaveVoyagesComponent', () => {
  let component: SaveVoyagesComponent;
  let fixture: ComponentFixture<SaveVoyagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveVoyagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveVoyagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
