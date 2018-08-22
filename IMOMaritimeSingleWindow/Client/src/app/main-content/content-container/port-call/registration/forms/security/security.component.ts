import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FalSecurityModel } from '../../../../../../shared/models/fal-security-model';
import { InternationalShipSecurityCertificateModel } from '../../../../../../shared/models/international-ship-security-certificate-model';
import { Subscription } from '../../../../../../../../node_modules/rxjs';
import { PortCallService } from 'app/shared/services/port-call.service';
import { CompanySecurityOfficerModel } from 'app/shared/models/company-security-officer-model';
import { OrganizationService } from '../../../../../../shared/services/organization.service';
import { PortCallModel } from 'app/shared/models/port-call-model';
import { ShipModel } from 'app/shared/models/ship-model';
import { OrganizationModel } from '../../../../../../shared/models/organization-model';
import { FalSecurityService } from '../../../../../../shared/services/fal-security.service';
import { SecurityPreviousPortOfCallModel } from '../../../../../../shared/models/security-previous-port-of-call-model';
import { ShipToShipActivityModel } from '../../../../../../shared/models/ship-to-ship-activity-model';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit, OnDestroy {
  @Input() securityModel: FalSecurityModel = new FalSecurityModel();
  @Input() shipModel: ShipModel;
  @Input() portCallId: number;

  constructor(
    private securityService: FalSecurityService
  ) { }

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
