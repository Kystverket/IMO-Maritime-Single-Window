import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearancesComponent } from './clearances.component';

describe('ClearancesComponent', () => {
  let component: ClearancesComponent;
  let fixture: ComponentFixture<ClearancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
