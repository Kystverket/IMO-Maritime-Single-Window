import { Component, OnInit } from '@angular/core';
import { OrganizationModel } from '../../../../../shared/models/organization-model';
import { ContentService } from '../../../../../shared/services/content.service';
import { OrganizationService } from '../../../../../shared/services/organization.service';

@Component({
  selector: 'app-register-organization',
  templateUrl: './register-organization.component.html',
  styleUrls: ['./register-organization.component.css'],
  providers: [OrganizationModel, OrganizationService]
})
export class RegisterOrganizationComponent implements OnInit {
  organizationTypeSelected: boolean;
  organizationTypeList: any[];
  selectedOrganizationType: any;
  organizationTypeDropdownString: string = "Select organization type";

  constructor(public organizationModel: OrganizationModel, private organizationService: OrganizationService, private contentService: ContentService) { }

  ngOnInit() {
    this.organizationService.getOrganizationTypes().subscribe(
      organizationTypesData => {
        this.organizationTypeList = organizationTypesData;
      }
    );
  }

  registerOrganization() {
    this.organizationService.registerOrganization(this.organizationModel);
    this.contentService.setContent("Port Call");
  }

  selectOrganizationType(organizationType: any) {
    this.organizationModel.organizationTypeId = organizationType.organizationTypeId;
    this.organizationTypeDropdownString = organizationType.name;
    this.selectedOrganizationType = organizationType;
    this.organizationTypeSelected = true;
  }

}
