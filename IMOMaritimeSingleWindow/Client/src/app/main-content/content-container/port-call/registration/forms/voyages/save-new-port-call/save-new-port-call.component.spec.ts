import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveNewPortCallComponent } from './save-new-port-call.component';

describe('SaveNewPortCallComponent', () => {
  let component: SaveNewPortCallComponent;
  let fixture: ComponentFixture<SaveNewPortCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveNewPortCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveNewPortCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
