import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtaEtdComponent } from './eta-etd.component';

describe('EtaEtdComponent', () => {
  let component: EtaEtdComponent;
  let fixture: ComponentFixture<EtaEtdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtaEtdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtaEtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
