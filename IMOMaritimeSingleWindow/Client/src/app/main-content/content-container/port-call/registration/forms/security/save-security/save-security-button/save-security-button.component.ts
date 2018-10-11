import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FalSecurityModel } from '../../../../../../../../shared/models/fal-security-model';
import { InternationalShipSecurityCertificateModel } from '../../../../../../../../shared/models/international-ship-security-certificate-model';
import { ShipModel } from '../../../../../../../../shared/models/ship-model';
import { SecurityPreviousPortOfCallModel } from '../../../../../../../../shared/models/security-previous-port-of-call-model';
import { ShipToShipActivityModel } from '../../../../../../../../shared/models/ship-to-ship-activity-model';
import { CompanySecurityOfficerModel } from '../../../../../../../../shared/models/company-security-officer-model';
import { ShipService, FalSecurityService } from '../../../../../../../../shared/services/';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-save-security-button',
  templateUrl: './save-security-button.component.html',
  styleUrls: ['./save-security-button.component.css']
})
export class SaveSecurityButtonComponent implements OnInit, OnDestroy {
  @Input() portCallId: number;
  securityModel: FalSecurityModel;
  isscModel: InternationalShipSecurityCertificateModel;
  shipModel: ShipModel;
  allowSaving = false;
  saving = false;

  saveSecurityModelSubscription: Subscription;
  saveIsscModelSubscription: Subscription;
  saveShipModelSubscription: Subscription;
  allowSavingSubscription: Subscription;

  constructor(
    private securityService: FalSecurityService,
    private shipService: ShipService
  ) { }

  ngOnInit() {
    this.saveSecurityModelSubscription = this.securityService.saveSecurityModelData$.subscribe(
      data => {
        this.securityModel = data;
      }
    );
    this.saveIsscModelSubscription = this.securityService.saveIsscModelData$.subscribe(
      data => {
        this.isscModel = data;
      }
    );
    this.saveShipModelSubscription = this.securityService.saveShipModelData$.subscribe(
      data => {
        this.shipModel = data;
      }
    );
    this.allowSavingSubscription = this.securityService.allowSavingData$.subscribe(
      data => {
        this.allowSaving = data;
      }
    );
  }

  ngOnDestroy() {
    this.saveSecurityModelSubscription.unsubscribe();
    this.saveIsscModelSubscription.unsubscribe();
    this.saveShipModelSubscription.unsubscribe();
    this.allowSavingSubscription.unsubscribe();
  }

  saveSecurity() {
    this.saving = true;
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
            this.saving = false;
            this.securityService.setPristineData(true);
            this.shipService.setIsscPristineData(true);
            this.securityService.setAllowSavingData(false);
          }, error => {
            this.securityService.setPristineData(true);
            this.shipService.setIsscPristineData(true);
            this.securityService.setAllowSavingData(false);
            this.saving = false;
          }
        );
      }
    );
  }

}
