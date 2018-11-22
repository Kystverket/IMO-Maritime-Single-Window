import { Component, OnDestroy, OnInit } from '@angular/core';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { ContentService, PortCallService, ShipService } from 'app/shared/services/';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-view-port-call',
  templateUrl: './view-port-call.component.html',
  styleUrls: ['./view-port-call.component.css']
})
export class ViewPortCallComponent implements OnInit, OnDestroy {

  backButtonIcon = 'white/left-arrow';

  shipDataSubscription: Subscription;

  constructor(
    private contentService: ContentService,
    private portCallService: PortCallService,
    private shipService: ShipService
  ) { }

  ngOnInit() {
    this.shipDataSubscription = this.portCallService.shipData$.subscribe(shipResult => {
      this.shipService.setShipData(shipResult);
    });
  }

  ngOnDestroy() {
    this.shipDataSubscription.unsubscribe();
  }

  goBack() {
    this.contentService.setContent(CONTENT_NAMES.VIEW_PORT_CALLS);
  }
}
