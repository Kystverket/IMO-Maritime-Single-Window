import { Component, OnInit } from '@angular/core';
import { PortCallService } from '../../../shared/services/port-call.service';

@Component({
  selector: 'app-port-call-registration',
  templateUrl: './port-call-registration.component.html',
  styleUrls: ['./port-call-registration.component.css'],
  providers: [PortCallService]
})
export class PortCallRegistrationComponent implements OnInit {

  shipFound: boolean;
  locationFound: boolean;

  constructor(private portCallService: PortCallService){}

  ngOnInit() {
    this.portCallService.shipData$.subscribe(
      data => this.shipFound = data != null
    );
    this.portCallService.locationData$.subscribe(
      data => this.locationFound = data != null
    );
  }
}
