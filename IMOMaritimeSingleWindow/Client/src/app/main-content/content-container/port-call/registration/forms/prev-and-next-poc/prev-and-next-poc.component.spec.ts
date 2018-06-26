import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevAndNextPocComponent } from './prev-and-next-poc.component';

describe('PrevAndNextPocComponent', () => {
  let component: PrevAndNextPocComponent;
  let fixture: ComponentFixture<PrevAndNextPocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevAndNextPocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevAndNextPocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
