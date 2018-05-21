import { Component, OnInit } from '@angular/core';
import { CONTENT_NAMES } from '../../../../shared/constants/content-names';
import { ContentService } from '../../../../shared/services/content.service';
import { PortCallService } from '../../../../shared/services/port-call.service';
import { ShipService } from '../../../../shared/services/ship.service';

@Component({
  selector: 'app-view-port-call',
  templateUrl: './view-port-call.component.html',
  styleUrls: ['./view-port-call.component.css']
})
export class ViewPortCallComponent implements OnInit {

  constructor(private contentService: ContentService, private portCallService: PortCallService, private shipService: ShipService) { }

  ngOnInit() {
    this.portCallService.shipData$.subscribe(
      shipResult => {
        this.shipService.setShipOverviewData(shipResult);
      }
    );
  }

  goBack() {
    this.contentService.setContent(CONTENT_NAMES.VIEW_PORT_CALLS);
  }

}
