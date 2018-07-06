import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateOfRegistryComponent } from './certificate-of-registry.component';

describe('CertificateOfRegistryComponent', () => {
  let component: CertificateOfRegistryComponent;
  let fixture: ComponentFixture<CertificateOfRegistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateOfRegistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateOfRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
