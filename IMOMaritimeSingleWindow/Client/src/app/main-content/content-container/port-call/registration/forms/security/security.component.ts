import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CompanySecurityOfficerModel, FalSecurityModel, InternationalShipSecurityCertificateModel, ShipModel } from 'app/shared/models/';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit, OnDestroy {
  @Input() securityModel: FalSecurityModel = new FalSecurityModel();
  @Input() shipModel: ShipModel;
  @Input() portCallId: number;
  isInitialized = false;

  constructor() { }

  ngOnInit() {
    this.isInitialized = false;
    if (!this.securityModel.companySecurityOfficer) {
      this.securityModel.companySecurityOfficer = new CompanySecurityOfficerModel();
    }
    if (!this.securityModel.securityPreviousPortOfCall) {
      this.securityModel.securityPreviousPortOfCall = [];
    }
    if (!this.securityModel.shipToShipActivity) {
      this.securityModel.shipToShipActivity = [];
    }
    if (!this.shipModel.issc) {
      this.shipModel.issc = new InternationalShipSecurityCertificateModel();
    }
    this.isInitialized = true;
  }

  ngOnDestroy() {
  }
}
