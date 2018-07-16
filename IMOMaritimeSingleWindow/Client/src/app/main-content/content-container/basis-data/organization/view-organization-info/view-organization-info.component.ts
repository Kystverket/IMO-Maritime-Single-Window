import { Component, OnInit } from '@angular/core';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { ContentService } from 'app/shared/services/content.service';
import { OrganizationService } from 'app/shared/services/organization.service';

@Component({
  selector: 'app-view-organization-info',
  templateUrl: './view-organization-info.component.html',
  styleUrls: ['./view-organization-info.component.css']
})
export class ViewOrganizationInfoComponent implements OnInit {
  organizationFound = false;

  constructor(
    private organizationService: OrganizationService,
    private contentService: ContentService
  ) {}

  ngOnInit() { }

  onOrganizationSearchResult(organizationSearchResult) {
    this.organizationService.setOrganizationSearchData(organizationSearchResult);
  }

  registerNewOrganization() {
    this.organizationService.setOrganizationData(null);
    this.contentService.setContent(CONTENT_NAMES.REGISTER_ORGANIZATION);
  }
}
