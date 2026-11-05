import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { OrganizationProperties } from 'app/shared/constants/organization-properties';
import { OrganizationModel } from 'app/shared/models/organization-model';

@Component({
  standalone: false,
  selector: 'app-organization-info-table',
  templateUrl: './organization-info-table.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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
