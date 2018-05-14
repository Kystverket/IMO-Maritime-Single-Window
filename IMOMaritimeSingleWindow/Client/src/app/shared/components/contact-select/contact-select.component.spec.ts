import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSelectComponent } from './contact-select.component';

describe('ContactSelectComponent', () => {
  let component: ContactSelectComponent;
  let fixture: ComponentFixture<ContactSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
