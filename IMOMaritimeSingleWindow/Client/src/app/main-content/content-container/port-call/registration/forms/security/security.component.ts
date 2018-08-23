import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FalSecurityModel } from 'app/shared/models/fal-security-model';
import { InternationalShipSecurityCertificateModel } from 'app/shared/models/international-ship-security-certificate-model';

import { CompanySecurityOfficerModel } from 'app/shared/models/company-security-officer-model';
import { ShipModel } from 'app/shared/models/ship-model';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit, OnDestroy {
  @Input() securityModel: FalSecurityModel = new FalSecurityModel();
  @Input() shipModel: ShipModel;
  @Input() portCallId: number;

  constructor() { }

  ngOnInit() {
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
  }

  ngOnDestroy() {
  }
}
