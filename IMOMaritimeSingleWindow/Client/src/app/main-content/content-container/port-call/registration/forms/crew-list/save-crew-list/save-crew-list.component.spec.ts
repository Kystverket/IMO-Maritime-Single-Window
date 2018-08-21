import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveCrewListComponent } from './save-crew-list.component';

describe('SaveCrewListComponent', () => {
  let component: SaveCrewListComponent;
  let fixture: ComponentFixture<SaveCrewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveCrewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveCrewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
