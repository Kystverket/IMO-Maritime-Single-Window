import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPortCallDraftComponent } from './new-port-call-draft.component';

describe('NewPortCallDraftComponent', () => {
  let component: NewPortCallDraftComponent;
  let fixture: ComponentFixture<NewPortCallDraftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPortCallDraftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPortCallDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
