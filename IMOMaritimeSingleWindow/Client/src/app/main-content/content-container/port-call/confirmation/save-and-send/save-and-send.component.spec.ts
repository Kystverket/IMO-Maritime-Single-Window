import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveAndSendComponent } from './save-and-send.component';

describe('SaveAndSendComponent', () => {
  let component: SaveAndSendComponent;
  let fixture: ComponentFixture<SaveAndSendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveAndSendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveAndSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
