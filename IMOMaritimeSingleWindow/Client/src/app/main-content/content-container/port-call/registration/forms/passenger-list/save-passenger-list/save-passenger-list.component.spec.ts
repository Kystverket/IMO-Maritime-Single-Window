import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavePassengerListComponent } from './save-passenger-list.component';

describe('SavePassengerListComponent', () => {
  let component: SavePassengerListComponent;
  let fixture: ComponentFixture<SavePassengerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavePassengerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavePassengerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
