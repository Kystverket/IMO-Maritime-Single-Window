import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityInfoComponent } from './security-info.component';

describe('SecurityInfoComponent', () => {
  let component: SecurityInfoComponent;
  let fixture: ComponentFixture<SecurityInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
