import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { ConstantsService, ContentService, LocationService} from 'app/shared/services/';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'app-location-button-row',
  templateUrl: './location-button-row.component.html',
  styleUrls: ['./location-button-row.component.css'],
  providers: [ConstantsService]
})
export class LocationButtonRowComponent implements ViewCell, OnInit {

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() edit: EventEmitter<any> = new EventEmitter();

  constructor(
    private contentService: ContentService,
    private locationService: LocationService
  ) { }

  ngOnInit() { }

  onEditClick() {
    this.setContent(CONTENT_NAMES.REGISTER_LOCATION);
  }

  private setContent(content: string) {
    this.setLocation(content);
  }

  setLocation(content) {
    this.contentService.setLoadingScreen(true, 'location.gif', 'Loading');
    this.locationService.setLocationData(this.rowData.locationModel);
    this.contentService.setContent(content);
  }

}
