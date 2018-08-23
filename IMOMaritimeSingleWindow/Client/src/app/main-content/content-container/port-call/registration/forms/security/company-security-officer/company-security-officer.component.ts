import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { LocalDataSource } from '../../../../../../../../../node_modules/ng2-smart-table';
import { Subscription } from '../../../../../../../../../node_modules/rxjs';
import { OrganizationService } from '../../../../../../../shared/services/organization.service';
import { CompanySecurityOfficerModel } from '../../../../../../../shared/models/company-security-officer-model';
import { OrganizationModel } from 'app/shared/models/organization-model';
import { NgbModalRef, NgbModal } from '../../../../../../../../../node_modules/@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-company-security-officer',
  templateUrl: './company-security-officer.component.html',
  styleUrls: ['./company-security-officer.component.css']
})
export class CompanySecurityOfficerComponent implements OnInit {
  @Input() csoModel: CompanySecurityOfficerModel;

  constructor(
  ) { }

  ngOnInit() {
  }

  onOrganizationResult(organization) {
    this.csoModel.organizationId = organization.organizationId;
    this.csoModel.organization = organization;
  }

  deselectOrganization() {
    this.csoModel.organizationId = null;
    this.csoModel.organization = null;
  }

}
