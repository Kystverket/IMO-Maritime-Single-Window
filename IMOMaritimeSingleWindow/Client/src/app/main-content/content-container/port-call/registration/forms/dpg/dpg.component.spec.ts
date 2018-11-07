import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DpgComponent } from './dpg.component';

describe('DpgComponent', () => {
  let component: DpgComponent;
  let fixture: ComponentFixture<DpgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DpgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
