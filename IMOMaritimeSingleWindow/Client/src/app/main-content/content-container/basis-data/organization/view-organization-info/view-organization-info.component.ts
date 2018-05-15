import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../../../shared/services/content.service';
import { OrganizationService } from '../../../../../shared/services/organization.service';

const ORGANIZATION_NAME = "Organization Name:";
const ORGANIZATION_NUMBER = "Organization no.:"
const ORGANIZATION_TYPE = "Organization Type:";
const ORGANIZATION_DESCRIPTION = "Description:";
const INVOICE_RECEIVER_NUMBER = "Invoice receiver no.:";

@Component({
  selector: 'app-view-organization-info',
  templateUrl: './view-organization-info.component.html',
  styleUrls: ['./view-organization-info.component.css']
})
export class ViewOrganizationInfoComponent implements OnInit {
  organizationModel: any;
  organizationFound: boolean = false;
  hasOrganizationType: boolean = false;
  organizationInfo: any[] = [
    { description: ORGANIZATION_NAME, data: null },
    { description: ORGANIZATION_NUMBER, data: null },
    { description: ORGANIZATION_TYPE, data: null },
    { description: ORGANIZATION_DESCRIPTION, data: null },
    { description: INVOICE_RECEIVER_NUMBER, data: null },
  ];

  constructor(private organizationService: OrganizationService, private contentService: ContentService) { }

  registerNewOrganization() {
    this.contentService.setContent("Register Organization");
  }

  deselectOrganization() {
    this.organizationFound = false;
    this.organizationService.setOrganizationData(null);
  }

  ngOnInit() {
    this.organizationService.organizationData$.subscribe(
      orgData => {
        if (orgData) {
          this.organizationFound = true;
          this.organizationModel = orgData;
          if (orgData.organizationType) this.organizationInfo.find(p => p.description == ORGANIZATION_TYPE).data = orgData.organizationType.name;
          this.organizationInfo.find(p => p.description == ORGANIZATION_NAME).data = orgData.name;
          this.organizationInfo.find(p => p.description == ORGANIZATION_NUMBER).data = orgData.organizationNo;
          this.organizationInfo.find(p => p.description == ORGANIZATION_DESCRIPTION).data = orgData.description;
          this.organizationInfo.find(p => p.description == INVOICE_RECEIVER_NUMBER).data = orgData.invoiceReceiverNo;

          // console.log(results);
          this.hasOrganizationType = (this.organizationModel.organizationType != null) ? true : false;
          this.organizationFound = true;
        } else {
          this.organizationFound = false;
        }
      }
    )
  }

}
