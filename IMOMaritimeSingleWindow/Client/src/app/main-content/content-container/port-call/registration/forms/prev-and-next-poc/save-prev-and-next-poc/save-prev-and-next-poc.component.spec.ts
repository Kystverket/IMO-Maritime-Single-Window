import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavePrevAndNextPocComponent } from './save-prev-and-next-poc.component';

describe('SavePrevAndNextPocComponent', () => {
  let component: SavePrevAndNextPocComponent;
  let fixture: ComponentFixture<SavePrevAndNextPocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavePrevAndNextPocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavePrevAndNextPocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
