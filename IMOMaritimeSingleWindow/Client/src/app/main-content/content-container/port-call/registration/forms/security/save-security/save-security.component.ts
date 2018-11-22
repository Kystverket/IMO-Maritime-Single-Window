import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CompanySecurityOfficerModel, FalSecurityModel, InternationalShipSecurityCertificateModel, SecurityPreviousPortOfCallModel, ShipModel, ShipToShipActivityModel } from 'app/shared/models/';
import { FalSecurityService, ShipService } from 'app/shared/services/';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-save-security',
  templateUrl: './save-security.component.html',
  styleUrls: ['./save-security.component.css']
})
export class SaveSecurityComponent implements OnInit, OnDestroy {
  @Input() securityModel: FalSecurityModel;
  @Input() isscModel: InternationalShipSecurityCertificateModel;
  @Input() shipModel: ShipModel;
  @Input() portCallId: number;

  pristineSecuritySubscription: Subscription;
  pristineIsscSubscription: Subscription;
  validSecurityDetailsSubscription: Subscription;
  validCompanySecurityOfficerSubscription: Subscription;
  validLast10PortCallsSubscription: Subscription;
  validShipToShipActivitySubscription: Subscription;
  validIsscDataSubscription: Subscription;

  allowSaving = false;
  securityIsPristine: boolean;
  isscIsPristine: boolean;
  securityDetailsIsValid: boolean;
  csoIsValid: boolean;
  last10PortCallsIsValid: boolean;
  shipToShipActivityIsValid: boolean;
  isscIsValid: boolean;

  constructor(
    private securityService: FalSecurityService,
    private shipService: ShipService
  ) { }

  ngOnInit() {
    this.pristineSecuritySubscription = this.securityService.pristineData$.subscribe(
      data => {
        this.securityIsPristine = data;
        this.checkData();
      }
    );
    this.pristineIsscSubscription = this.shipService.isscPristineData$.subscribe(
      data => {
        this.isscIsPristine = data;
        this.checkData();
      }
    );
    this.validSecurityDetailsSubscription = this.securityService.validSecurityDetailsData$.subscribe(
      data => {
        this.securityDetailsIsValid = data;
        this.checkData();
      }
    );
    this.validCompanySecurityOfficerSubscription = this.securityService.validCompanySecurityOfficerData$.subscribe(
      data => {
        this.csoIsValid = data;
        this.checkData();
      }
    );
    this.validLast10PortCallsSubscription = this.securityService.validLast10PortCallsData$.subscribe(
      data => {
        this.last10PortCallsIsValid = data;
        this.checkData();
      }
    );
    this.validShipToShipActivitySubscription = this.securityService.validShipToShipActivityData$.subscribe(
      data => {
        this.shipToShipActivityIsValid = data;
        this.checkData();
      }
    );
    this.validIsscDataSubscription = this.shipService.validIsscData$.subscribe(
      data => {
        this.isscIsValid = data;
        this.checkData();
      }
    );
  }

  ngOnDestroy() {
    this.pristineIsscSubscription.unsubscribe();
    this.pristineSecuritySubscription.unsubscribe();
    this.validCompanySecurityOfficerSubscription.unsubscribe();
    this.validIsscDataSubscription.unsubscribe();
    this.validLast10PortCallsSubscription.unsubscribe();
    this.validSecurityDetailsSubscription.unsubscribe();
    this.validShipToShipActivitySubscription.unsubscribe();
  }

  /** Checks that all required information has been provided. */
  checkData() {
    this.allowSaving = !(this.securityIsPristine && this.isscIsPristine)
      && this.securityDetailsIsValid && this.csoIsValid
      && this.last10PortCallsIsValid && this.shipToShipActivityIsValid
      && this.isscIsValid;
    this.securityService.setSaveSecurityModelData(this.securityModel);
    this.securityService.setSaveIsscModelData(this.isscModel);
    this.securityService.setSaveShipModelData(this.shipModel);
    this.securityService.setAllowSavingData(this.allowSaving);
  }

}
