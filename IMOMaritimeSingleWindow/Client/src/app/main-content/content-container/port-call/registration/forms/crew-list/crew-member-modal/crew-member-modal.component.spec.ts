import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewMemberModalComponent } from './crew-member-modal.component';

describe('CrewMemberModalComponent', () => {
  let component: CrewMemberModalComponent;
  let fixture: ComponentFixture<CrewMemberModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewMemberModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewMemberModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
