import { Component, OnInit } from '@angular/core';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { ContentService } from 'app/shared/services/content.service';
import { ShipService } from 'app/shared/services/ship.service';

@Component({
  selector: 'app-view-ship-info',
  templateUrl: './view-ship-info.component.html',
  styleUrls: ['./view-ship-info.component.css']
})
export class ViewShipInfoComponent implements OnInit {

  constructor(
    private shipService: ShipService,
    private contentService: ContentService
  ) { }

  ngOnInit() { }

  onShipSearchResult(shipSearchResult) {
    this.shipService.setShipSearchData(shipSearchResult);
  }

  registerNewShip() {
    this.shipService.setShipData(null);
    this.contentService.setContent(CONTENT_NAMES.REGISTER_SHIP);
  }
}
