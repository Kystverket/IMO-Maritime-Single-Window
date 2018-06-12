import { Component, OnInit } from '@angular/core';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { OrganizationProperties } from 'app/shared/constants/organization-properties';
import { ContentService } from 'app/shared/services/content.service';
import { OrganizationService } from 'app/shared/services/organization.service';

@Component({
  selector: 'app-view-organization-info',
  templateUrl: './view-organization-info.component.html',
  styleUrls: ['./view-organization-info.component.css']
})
export class ViewOrganizationInfoComponent implements OnInit {

  organizationFound = false;
  organizationProperties = OrganizationProperties.PROPERTIES;
  organizationInfo: any[];

  constructor(private organizationService: OrganizationService, private contentService: ContentService) { }

  registerNewOrganization() {
    this.contentService.setContent(CONTENT_NAMES.REGISTER_ORGANIZATION);
  }

  deselectOrganization() {
    this.organizationFound = false;
    this.organizationService.setOrganizationData(null);
  }

  ngOnInit() {
    this.organizationService.setOrganizationData(null);
    this.organizationService.organizationData$.subscribe(
      organizationResult => {
        if (organizationResult) {
          this.organizationProperties.ORGANIZATION_TYPE.data = (organizationResult.organizationType)
            ? organizationResult.organizationType.name
            : null;
          this.organizationProperties.ORGANIZATION_NAME.data = organizationResult.name;
          this.organizationProperties.ORGANIZATION_NO.data = organizationResult.organizationNo;
          this.organizationProperties.ORGANIZATION_DESCRIPTION.data = organizationResult.description;
          this.organizationFound = true;
        } else {
          this.organizationFound = false;
          this.organizationProperties = OrganizationProperties.PROPERTIES;
        }
        this.organizationInfo = Object.values(this.organizationProperties);
      }
    );
  }

}
