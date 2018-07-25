import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevAndNextPocTableComponent } from './prev-and-next-poc-table.component';

describe('PrevAndNextPocTableComponent', () => {
  let component: PrevAndNextPocTableComponent;
  let fixture: ComponentFixture<PrevAndNextPocTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevAndNextPocTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevAndNextPocTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
