import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewListErrorModalComponent } from './crew-list-error-modal.component';

describe('CrewListErrorModalComponent', () => {
  let component: CrewListErrorModalComponent;
  let fixture: ComponentFixture<CrewListErrorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewListErrorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewListErrorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
