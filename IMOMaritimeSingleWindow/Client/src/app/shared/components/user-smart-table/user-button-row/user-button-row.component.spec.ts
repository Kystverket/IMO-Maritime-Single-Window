import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserButtonRowComponent } from './user-button-row.component';

describe('UserButtonRowComponent', () => {
  let component: UserButtonRowComponent;
  let fixture: ComponentFixture<UserButtonRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserButtonRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserButtonRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
