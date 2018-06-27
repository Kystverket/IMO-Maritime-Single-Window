import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsnTableComponent } from './ssn-table.component';

describe('SsnTableComponent', () => {
  let component: SsnTableComponent;
  let fixture: ComponentFixture<SsnTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsnTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsnTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
