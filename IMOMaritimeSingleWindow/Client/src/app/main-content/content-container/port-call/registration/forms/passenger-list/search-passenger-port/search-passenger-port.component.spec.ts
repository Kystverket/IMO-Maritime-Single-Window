import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPassengerPortComponent } from './search-passenger-port.component';

describe('FindPassengerPortComponent', () => {
  let component: SearchPassengerPortComponent;
  let fixture: ComponentFixture<SearchPassengerPortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPassengerPortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPassengerPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
