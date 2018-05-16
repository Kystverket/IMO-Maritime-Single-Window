import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchShipComponent } from './search-ship.component';

describe('SearchShipComponent', () => {
  let component: SearchShipComponent;
  let fixture: ComponentFixture<SearchShipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchShipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
