import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityDetailsComponent } from './security-details.component';

describe('SecurityDetailsComponent', () => {
  let component: SecurityDetailsComponent;
  let fixture: ComponentFixture<SecurityDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
