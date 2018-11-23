import { Component, OnInit } from '@angular/core';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { ContentService, OrganizationService } from 'app/shared/services/';

@Component({
  selector: 'app-view-organization-info',
  templateUrl: './view-organization-info.component.html',
  styleUrls: ['./view-organization-info.component.css']
})
export class ViewOrganizationInfoComponent implements OnInit {
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
