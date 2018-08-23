import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { LocalDataSource } from '../../../../../../../../../node_modules/ng2-smart-table';
import { Subscription } from '../../../../../../../../../node_modules/rxjs';
import { OrganizationService } from '../../../../../../../shared/services/organization.service';
import { CompanySecurityOfficerModel } from '../../../../../../../shared/models/company-security-officer-model';
import { OrganizationModel } from 'app/shared/models/organization-model';
import { NgbModalRef, NgbModal } from '../../../../../../../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { FalSecurityService } from '../../../../../../../shared/services/fal-security.service';

@Component({
  selector: 'app-company-security-officer',
  templateUrl: './company-security-officer.component.html',
  styleUrls: ['./company-security-officer.component.css']
})
export class CompanySecurityOfficerComponent implements OnInit {
  @Input() csoModel: CompanySecurityOfficerModel;

  constructor(
    private securityService: FalSecurityService
  ) { }

  ngOnInit() {
    this.validateData();
  }

  onOrganizationResult(organization) {
    this.csoModel.organizationId = organization.organizationId;
    this.csoModel.organization = organization;
    this.touchData();
  }

  deselectOrganization() {
    this.csoModel.organizationId = null;
    this.csoModel.organization = null;
    this.touchData();
  }

  touchData() {
    this.securityService.setPristineData(false);
    this.validateData();
  }

  private validateData() {
    this.securityService.setValidCompanySecurityOfficerData(this.dataIsValid());
  }

  private dataIsValid() {
    return this.csoModel != null
      && this.csoModel.organizationId != null
      && this.csoModel.givenName != null
      && this.csoModel.surname != null
      && this.csoModel.phoneNumber != null
      && this.csoModel.email != null;
  }

}
