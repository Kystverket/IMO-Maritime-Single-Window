import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewInfoTableComponent } from './crew-info-table.component';

describe('CrewInfoTableComponent', () => {
  let component: CrewInfoTableComponent;
  let fixture: ComponentFixture<CrewInfoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewInfoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewInfoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
