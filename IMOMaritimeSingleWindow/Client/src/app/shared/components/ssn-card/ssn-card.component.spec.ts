import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsnCardComponent } from './ssn-card.component';

describe('SsnCardComponent', () => {
  let component: SsnCardComponent;
  let fixture: ComponentFixture<SsnCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsnCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsnCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
