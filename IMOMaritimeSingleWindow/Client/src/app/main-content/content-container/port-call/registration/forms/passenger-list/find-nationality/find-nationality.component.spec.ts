import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindNationalityComponent } from './find-nationality.component';

describe('FindNationalityComponent', () => {
  let component: FindNationalityComponent;
  let fixture: ComponentFixture<FindNationalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindNationalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindNationalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
