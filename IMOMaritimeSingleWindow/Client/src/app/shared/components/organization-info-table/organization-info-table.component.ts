import { Component, OnInit, Input } from '@angular/core';
import { OrganizationProperties } from 'app/shared/constants/organization-properties';
import { OrganizationModel } from 'app/shared/models/organization-model';

@Component({
  selector: 'app-organization-info-table',
  templateUrl: './organization-info-table.component.html',
  styleUrls: ['./organization-info-table.component.css']
})
export class OrganizationInfoTableComponent implements OnInit {

  @Input() organizationModel: OrganizationModel;
  organizationProperties = new OrganizationProperties().getPropertyList();

  constructor() { }

  ngOnInit() {
    OrganizationProperties.setOrganizationData(
      this.organizationProperties,
      this.organizationModel
    );
  }

}
