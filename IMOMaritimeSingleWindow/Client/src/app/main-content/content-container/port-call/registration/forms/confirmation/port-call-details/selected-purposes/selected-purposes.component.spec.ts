import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedPurposesComponent } from './selected-purposes.component';

describe('SelectedPurposesComponent', () => {
  let component: SelectedPurposesComponent;
  let fixture: ComponentFixture<SelectedPurposesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedPurposesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedPurposesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
