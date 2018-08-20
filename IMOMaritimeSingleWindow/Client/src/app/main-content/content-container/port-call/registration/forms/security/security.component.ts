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

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit, OnDestroy {
  @Input() portCallId: number;
  @Input() shipModel: ShipModel;
  @Input() securityModel: FalSecurityModel = new FalSecurityModel();

  isscModel: InternationalShipSecurityCertificateModel = new InternationalShipSecurityCertificateModel();
  testOrganizationId = 100083;
  organizationModel: OrganizationModel;
  organizationSubscription: Subscription;
  csoSubscription: Subscription;
  csoModel: CompanySecurityOfficerModel = new CompanySecurityOfficerModel();

  constructor(
    private securityService: FalSecurityService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
