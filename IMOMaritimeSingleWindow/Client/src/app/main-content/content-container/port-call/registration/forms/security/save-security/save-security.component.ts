import { Component, OnInit, Input } from '@angular/core';
import { FalSecurityModel } from '../../../../../../../shared/models/fal-security-model';
import { InternationalShipSecurityCertificateModel } from '../../../../../../../shared/models/international-ship-security-certificate-model';
import { SecurityPreviousPortOfCallModel } from '../../../../../../../shared/models/security-previous-port-of-call-model';
import { ShipToShipActivityModel } from '../../../../../../../shared/models/ship-to-ship-activity-model';
import { CompanySecurityOfficerModel } from '../../../../../../../shared/models/company-security-officer-model';
import { FalSecurityService } from '../../../../../../../shared/services/fal-security.service';
import { ShipService } from '../../../../../../../shared/services/ship.service';
import { ShipModel } from '../../../../../../../shared/models/ship-model';

@Component({
  selector: 'app-save-security',
  templateUrl: './save-security.component.html',
  styleUrls: ['./save-security.component.css']
})
export class SaveSecurityComponent implements OnInit {
  @Input() securityModel: FalSecurityModel;
  @Input() isscModel: InternationalShipSecurityCertificateModel;
  @Input() shipModel: ShipModel;
  @Input() portCallId: number;

  constructor(
    private securityService: FalSecurityService,
    private shipService: ShipService
  ) { }

  ngOnInit() {
  }

  saveSecurity() {
    console.log('securityModel:\n', this.securityModel);
    console.log('isscModel:\n', this.isscModel);
    const dbSecurity = new FalSecurityModel();
    const dbIssc = new InternationalShipSecurityCertificateModel();
    if (this.isscModel.isscId) {
      dbIssc.isscId = this.isscModel.isscId;
    }
    dbIssc.certificateNumber = this.isscModel.certificateNumber;
    dbIssc.governmentIssuerId = this.isscModel.governmentIssuerId;
    dbIssc.rsoIssuerId = this.isscModel.rsoIssuerId;
    dbIssc.expiryDate = this.isscModel.expiryDate;
    dbIssc.issuedByGovernment = this.isscModel.issuedByGovernment;
    this.shipService.saveISSC(dbIssc).subscribe(
      isscResult => {
        console.log('ISSC saved.');
        if (!this.isscModel.isscId) {
          this.shipService.updateShipISSC(this.shipModel.shipId, isscResult.isscId).subscribe(
            shipIsscResult => {
              console.log('Ship has been registered with ISSC.');
            }
          );
        }
      }
    );

    if (this.securityModel.falSecurityId) {
      dbSecurity.falSecurityId = this.securityModel.falSecurityId;
    }
    dbSecurity.portCallId = this.portCallId;
    dbSecurity.securityLevelId = this.securityModel.securityLevelId;
    dbSecurity.shipHasValidSspOnBoard = this.securityModel.shipHasValidSspOnBoard;
    dbSecurity.otherRelatedInfo = this.securityModel.otherRelatedInfo;

    if (this.securityModel.securityPreviousPortOfCall && this.securityModel.securityPreviousPortOfCall.length > 0) {
      dbSecurity.securityPreviousPortOfCall = this.securityModel.securityPreviousPortOfCall.map(entry => {
        const obj = new SecurityPreviousPortOfCallModel();
        obj.locationId = entry.locationId;
        obj.securityLevelId = entry.securityLevelId;
        obj.arrivalDateTime = entry.arrivalDateTime;
        obj.departureDateTime = entry.departureDateTime;
        obj.sequenceNumber = entry.sequenceNumber;
        obj.additionalSecurityMeasures = entry.additionalSecurityMeasures;
        return obj;
      });
    }

    if (this.securityModel.shipToShipActivity && this.securityModel.shipToShipActivity.length > 0) {
      dbSecurity.shipToShipActivity = this.securityModel.shipToShipActivity.map(entry => {
        const obj = new ShipToShipActivityModel();
        obj.locationId = entry.locationId;
        obj.activityTypeId = entry.activityTypeId;
        obj.fromDate = entry.fromDate;
        obj.toDate = entry.toDate;
        obj.latitude = entry.latitude;
        obj.longitude = entry.longitude;
        obj.securityMeasuresAppliedInLieu = entry.securityMeasuresAppliedInLieu;
        return obj;
      });
    }

    const companySecurityOfficer: CompanySecurityOfficerModel = new CompanySecurityOfficerModel();
    if (this.securityModel.companySecurityOfficer.companySecurityOfficerId) {
      companySecurityOfficer.companySecurityOfficerId = this.securityModel.companySecurityOfficer.companySecurityOfficerId;
    }
    companySecurityOfficer.organizationId = this.securityModel.companySecurityOfficer.organizationId;
    companySecurityOfficer.email = this.securityModel.companySecurityOfficer.email;
    companySecurityOfficer.phoneNumber = this.securityModel.companySecurityOfficer.phoneNumber;
    companySecurityOfficer.givenName = this.securityModel.companySecurityOfficer.givenName;
    companySecurityOfficer.surname = this.securityModel.companySecurityOfficer.surname;
    this.securityService.saveCompanySecurityOfficer(companySecurityOfficer).subscribe(
      csoResult => {
        dbSecurity.companySecurityOfficerId = csoResult.companySecurityOfficerId;
        this.securityService.saveFalSecurity(dbSecurity).subscribe(
          securityResult => {
            console.log(securityResult);
          }
        );
      }
    );

  }

}
