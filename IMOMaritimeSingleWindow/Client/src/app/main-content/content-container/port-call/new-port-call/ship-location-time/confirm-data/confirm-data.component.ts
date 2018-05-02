import { Component, OnInit } from '@angular/core';
import { ShipOverviewModel } from '../../../../../../shared/models/ship-overview-model';
import { LocationOverviewModel } from '../../../../../../shared/models/location-overview-model';
import { EtaEtdDateTime } from '../../../../../../shared/models/eta-etd-interface';
import { PortCallService } from '../../../../../../shared/services/port-call.service';
import { ContentService } from '../../../../../../shared/services/content.service';
import { PortCallModel } from '../../../../../../shared/models/port-call-model';

@Component({
  selector: 'app-confirm-data',
  templateUrl: './confirm-data.component.html',
  styleUrls: ['./confirm-data.component.css']
})
export class ConfirmDataComponent implements OnInit {
  shipModel: ShipOverviewModel;
  locationModel: LocationOverviewModel;
  etaEtdModel: EtaEtdDateTime;
  portCallModel: PortCallModel = new PortCallModel();

  shipFound: boolean;
  locationFound: boolean;
  dateTimeFound: boolean;

  constructor(private portCallService: PortCallService, private contentService: ContentService) { }

  ngOnInit() {
    this.portCallService.shipData$.subscribe(
      shipData => {
        if (shipData) {
          console.log(shipData);
          this.shipFound = true;
          this.shipModel = shipData;
        } else {
          this.shipFound = false;
        }
      }
    );
    this.portCallService.locationData$.subscribe(
      locationData => {
        if (locationData) {
          console.log(locationData);
          this.locationFound = true;
          this.locationModel = locationData;
        } else {
          this.locationFound = false;
        }
      }
    );
    this.portCallService.etaEtdData$.subscribe(
      etaEtdData => {
        if (etaEtdData) {
          this.dateTimeFound =
          this.etaEtdModel = etaEtdData;
        } else { 
          this.dateTimeFound = false;
        }
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
    this.portCallModel.shipId = this.shipModel.ship.shipId;
    // this.portCallModel.portCallStatusId = PORT_CALL_STATUS_INCOMPLETE_ID;
    this.portCallModel.portCallStatusId = 100235;
    this.portCallModel.locationId = this.locationModel.location.locationId;
    let eta = new Date(Date.UTC(this.etaEtdModel.eta.year, (this.etaEtdModel.eta.month - 1), this.etaEtdModel.eta.day, this.etaEtdModel.eta.hour, this.etaEtdModel.eta.minute));
    let etd = new Date(Date.UTC(this.etaEtdModel.etd.year, (this.etaEtdModel.etd.month - 1), this.etaEtdModel.eta.day, this.etaEtdModel.eta.hour, this.etaEtdModel.eta.minute));
    this.portCallModel.locationEta = eta;
    this.portCallModel.locationEtd = etd;
    console.log(this.portCallModel);
    this.portCallService.registerNewPortCall(this.portCallModel);
    this.contentService.setPortCallForm("Port Call Details");
    this.contentService.setContent("Register Port Call");
  }
}
