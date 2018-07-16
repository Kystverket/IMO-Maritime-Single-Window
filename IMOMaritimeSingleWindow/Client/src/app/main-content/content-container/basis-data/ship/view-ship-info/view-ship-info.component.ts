import { Component, OnInit } from '@angular/core';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { ShipProperties } from 'app/shared/constants/ship-properties';
import { ContentService } from 'app/shared/services/content.service';
import { ShipService } from 'app/shared/services/ship.service';

@Component({
  selector: 'app-view-ship-info',
  templateUrl: './view-ship-info.component.html',
  styleUrls: ['./view-ship-info.component.css']
})
export class ViewShipInfoComponent implements OnInit {
  shipFound = false;

  shipProperties: any = ShipProperties.PROPERTIES;
  shipInfo: any[];
  showTable = false;

  constructor(
    private shipService: ShipService,
    private contentService: ContentService
  ) {}

  ngOnInit() {
    this.shipService.setShipOverviewData(null);
    this.shipService.shipOverviewData$.subscribe(shipResult => {
      if (shipResult) {
        this.shipFound = true;
      } else {
        this.shipFound = false;
      }
    });
  }

  onShipSearchResult(shipSearchResult) {
    this.shipService.setShipSearchData(shipSearchResult);
  }

  registerNewShip() {
    this.shipService.setShipOverviewData(null);
    this.contentService.setContent(CONTENT_NAMES.REGISTER_SHIP);
  }

  editShip() {
    this.contentService.setContent(CONTENT_NAMES.REGISTER_SHIP);
  }

  searchShips() {
    this.showTable = true;
  }
}
