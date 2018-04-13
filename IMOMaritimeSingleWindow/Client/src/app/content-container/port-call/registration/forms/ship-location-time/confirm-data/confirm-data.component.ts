import { Component, OnInit } from '@angular/core';
import { PortCallService } from '../../../../../../shared/services/port-call.service';
import { EtaEtdDateTime } from '../eta-etd/eta-etd-date-time.interface';
import { ShipOverviewModel } from '../../../../../../shared/models/ship-overview-model';
import { LocationOverviewModel } from '../../../../../../shared/models/location-overview-model';

@Component({
  selector: 'app-confirm-data',
  templateUrl: './confirm-data.component.html',
  styleUrls: ['./confirm-data.component.css']
})
export class ConfirmDataComponent implements OnInit {
  shipModel: ShipOverviewModel;
  locationModel: LocationOverviewModel;
  etaEtdModel: EtaEtdDateTime;

  shipFound: boolean;
  locationFound: boolean;
  dateTimeFound: boolean;

  constructor(private portCallService: PortCallService) { }

  ngOnInit() {
    this.portCallService.overviewData$.subscribe(
      ovData => {
        if (ovData != null) {
          // Ship
        this.shipFound = ovData.shipOverview != null;
        this.shipModel = this.shipFound ? ovData.shipOverview : null;
        // Location
        this.locationFound = ovData.locationOverview != null;
        this.locationModel = this.locationFound ? ovData.locationOverview : null;
        }
        
      }
    );
    // ETA/ETD
    this.portCallService.etaEtdData$.subscribe(
      data => {
        this.dateTimeFound = data != null;
        this.etaEtdModel = data;
      }
    );
  }

  dateTimeFormat(number: number) {
    if (number <= 9) {
      return "0" + number;
    } else {
      return number;
    }
  }

  startPortCallRegistration() {
    if (!this.shipFound || !this.locationFound || !this.dateTimeFound) {
      return;
    }
    this.portCallService.savePortCall();
  }
}
