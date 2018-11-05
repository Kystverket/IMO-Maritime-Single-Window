import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { ConstantsService, ContentService, OrganizationService } from 'app/shared/services/';

@Component({
  selector: 'app-organization-button-row',
  templateUrl: './organization-button-row.component.html',
  styleUrls: ['./organization-button-row.component.css'],
  providers: [ConstantsService]
})
export class OrganizationButtonRowComponent implements ViewCell, OnInit {

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() edit: EventEmitter<any> = new EventEmitter();

  organizationData: any[];

  constructor(
    private organizationService: OrganizationService,
    private contentService: ContentService
  ) { }

  ngOnInit() {
    this.organizationService.organizationData$.subscribe(
      results => {
        if (results) {
          this.organizationData = results;
        }
      }
    );
  }

  onEditClick() {
    this.setContent(CONTENT_NAMES.REGISTER_ORGANIZATION);
  }

  private setContent(content: string) {
    this.setOrganization(content);
  }

  setOrganization(content) {
    this.contentService.setLoadingScreen(true, 'pax.gif', 'Loading');
    this.organizationService.setOrganizationData(this.rowData.organizationModel);
    this.contentService.setContent(content);
  }

}
