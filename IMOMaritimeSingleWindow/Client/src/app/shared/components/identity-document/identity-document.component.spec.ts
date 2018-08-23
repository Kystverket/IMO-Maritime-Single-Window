import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityDocumentComponent } from './identity-document.component';

describe('IdentityDocumentComponent', () => {
  let component: IdentityDocumentComponent;
  let fixture: ComponentFixture<IdentityDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentityDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
