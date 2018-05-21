import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHarbourComponent } from './search-harbour.component';

describe('SearchHarbourComponent', () => {
  let component: SearchHarbourComponent;
  let fixture: ComponentFixture<SearchHarbourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchHarbourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHarbourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
