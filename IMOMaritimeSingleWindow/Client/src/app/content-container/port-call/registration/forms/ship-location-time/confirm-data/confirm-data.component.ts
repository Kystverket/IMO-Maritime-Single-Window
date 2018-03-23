import { Component, OnInit } from '@angular/core';
import { PortCallService } from '../../../../../../shared/services/port-call.service';
import { EtaEtdDateTime } from '../eta-etd/eta-etd-date-time.interface';

@Component({
  selector: 'app-confirm-data',
  templateUrl: './confirm-data.component.html',
  styleUrls: ['./confirm-data.component.css']
})
export class ConfirmDataComponent implements OnInit {
  shipModel: any;
  locationModel: any;
  etaEtdModel: EtaEtdDateTime;

  shipFound: boolean;
  locationFound: boolean;
  dateTimeFound: boolean;

  constructor(private portCallService: PortCallService) { }

  dateTimeFormat(number: number) {
    if (number <= 9) {
      return "0" + number;
    } else {
      return number;
    }
  }

  ngOnInit() {
    this.portCallService.shipData$.subscribe(
      data => {
        this.shipFound = data != null;
        this.shipModel = data;
      }
    );
    this.portCallService.locationData$.subscribe(
      data => {
        this.locationFound = data != null;
        this.locationModel = data;
      }
    );
    this.portCallService.etaEtdData$.subscribe(
      data => {
        this.dateTimeFound = data != null;
        this.etaEtdModel = data;
      }
    );
  }
}
