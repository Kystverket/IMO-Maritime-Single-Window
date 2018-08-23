import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveSecurityComponent } from './save-security.component';

describe('SaveSecurityComponent', () => {
  let component: SaveSecurityComponent;
  let fixture: ComponentFixture<SaveSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
