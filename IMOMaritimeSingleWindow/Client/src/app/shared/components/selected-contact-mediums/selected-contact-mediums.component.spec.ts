import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedContactMediumsComponent } from './selected-contact-mediums.component';

describe('SelectedContactMediumsComponent', () => {
  let component: SelectedContactMediumsComponent;
  let fixture: ComponentFixture<SelectedContactMediumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedContactMediumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedContactMediumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
