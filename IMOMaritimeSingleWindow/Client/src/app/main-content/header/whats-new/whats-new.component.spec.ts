import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsNewComponent } from './whats-new.component';

describe('WhatsNewComponent', () => {
  let component: WhatsNewComponent;
  let fixture: ComponentFixture<WhatsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
