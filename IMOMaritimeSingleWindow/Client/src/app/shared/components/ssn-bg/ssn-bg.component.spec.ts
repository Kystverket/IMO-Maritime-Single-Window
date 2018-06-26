import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsnBgComponent } from './ssn-bg.component';

describe('SsnBgComponent', () => {
  let component: SsnBgComponent;
  let fixture: ComponentFixture<SsnBgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsnBgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsnBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
