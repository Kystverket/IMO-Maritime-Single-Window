import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveSecurityButtonComponent } from './save-security-button.component';

describe('SaveSecurityButtonComponent', () => {
  let component: SaveSecurityButtonComponent;
  let fixture: ComponentFixture<SaveSecurityButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveSecurityButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveSecurityButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
