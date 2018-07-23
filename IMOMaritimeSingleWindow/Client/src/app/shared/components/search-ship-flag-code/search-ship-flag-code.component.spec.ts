import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchShipFlagCodeComponent } from './search-ship-flag-code.component';

describe('SearchShipFlagCodeComponent', () => {
  let component: SearchShipFlagCodeComponent;
  let fixture: ComponentFixture<SearchShipFlagCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchShipFlagCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchShipFlagCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
