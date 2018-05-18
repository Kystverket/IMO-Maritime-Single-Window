import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortCallDetailsComponent } from './port-call-details.component';

describe('PortCallDetailsComponent', () => {
  let component: PortCallDetailsComponent;
  let fixture: ComponentFixture<PortCallDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortCallDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortCallDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
