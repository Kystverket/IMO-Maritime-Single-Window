import { Component, OnInit } from '@angular/core';
import { CONTENT_NAMES } from '../../../../../shared/constants/content-names';
import { ShipProperties } from '../../../../../shared/constants/ship-properties';
import { ConstantsService } from '../../../../../shared/services/constants.service';
import { ContentService } from '../../../../../shared/services/content.service';
import { ShipService } from '../../../../../shared/services/ship.service';

@Component({
  selector: 'app-view-ship-info',
  templateUrl: './view-ship-info.component.html',
  styleUrls: ['./view-ship-info.component.css'],
  providers: [ConstantsService]
})
export class ViewShipInfoComponent implements OnInit {

  shipFlag: string;
  contactMediumList: any;
  shipHasContactInfo: boolean = false;
  shipContactInfo: any[] = [];
  shipFound: boolean = false;

  shipProperties: any = ShipProperties.PROPERTIES;
  shipInfo: any[];

  deselectShip() {
    this.shipFound = false;
    this.shipService.setShipOverviewData(null);
  }

  registerNewShip() {
    this.contentService.setContent(CONTENT_NAMES.REGISTER_SHIP);
  }

  constructor(private shipService: ShipService, private constantsService: ConstantsService, private contentService: ContentService) { }

  ngOnInit() {
    this.shipService.setShipOverviewData(null);
    this.shipService.shipOverviewData$.subscribe(
      shipResult => {
        if (shipResult) {
          this.shipFound = true;
        } else {
          this.shipFound = false;
        }
      }
    )
  }
}
