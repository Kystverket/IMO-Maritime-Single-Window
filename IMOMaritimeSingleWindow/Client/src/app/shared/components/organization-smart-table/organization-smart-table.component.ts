import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Subscription } from 'rxjs/Subscription';
import { OrganizationService } from '../../services/organization.service';
import { OrganizationButtonRowComponent } from './organization-button-row/organization-button-row.component';

@Component({
  selector: 'app-organization-smart-table',
  templateUrl: './organization-smart-table.component.html',
  styleUrls: ['./organization-smart-table.component.css']
})
export class OrganizationSmartTableComponent implements OnInit, OnDestroy {

  tableData = [];
  dataSource: LocalDataSource = new LocalDataSource();
  tableSettings = {
    mode: 'external',
    actions: false,
    attr: {
      class: 'table table-bordered'
    },
    noDataMessage: 'There are no organizations in this list.',

    columns: {
      name: {
        title: 'Name',
        type: 'html'
      },
      type: {
        title: 'Type',
        type: 'html'
      },
      organizationNumber: {
        title: 'Organization Number',
        type: 'html'
      },
      description: {
        title: 'Description',
        type: 'html'
      },
      actions: {
        title: 'Actions',
        type: 'custom',
        filter: false,
        sort: false,
        renderComponent: OrganizationButtonRowComponent
      }
    }
  };

  organizationSearchDataSubscription: Subscription;

  constructor(
    private organizationService: OrganizationService
  ) { }

  ngOnInit() {
    this.organizationSearchDataSubscription = this.organizationService.organizationSearchData$.subscribe(data => {
      if (data) {
        if (data.length !== 0) {
          const rowList = [];
          data.forEach(organization => {
            const row = this.dataRow(organization);
            rowList.push(row);
          });
          this.tableData = rowList;
        }
      }
      this.dataSource.load(this.tableData);
    });
  }

  ngOnDestroy() {
    this.organizationSearchDataSubscription.unsubscribe();
  }

  dataRow(organization) {
    const row = {
      organizationModel: organization,
      name: organization.name,
      type: organization.organizationType ?  organization.organizationType.name : `<div class="font-italic">Not available.</div>`,
      organizationNumber: organization.organizationNo || `<div class="font-italic">Not provided.</div>`,
      description: organization.description || `<div class="font-italic">Not provided.</div>`,
      actions: 'btn'
    };
    return row;
  }
}
