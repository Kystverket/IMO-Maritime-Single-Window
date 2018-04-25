import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPortCallComponent } from './new-port-call.component';

describe('NewPortCallComponent', () => {
  let component: NewPortCallComponent;
  let fixture: ComponentFixture<NewPortCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPortCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPortCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
