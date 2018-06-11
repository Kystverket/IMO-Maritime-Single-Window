import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLocationComponent } from './edit-location.component';

describe('EditLocationComponent', () => {
  let component: EditLocationComponent;
  let fixture: ComponentFixture<EditLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
