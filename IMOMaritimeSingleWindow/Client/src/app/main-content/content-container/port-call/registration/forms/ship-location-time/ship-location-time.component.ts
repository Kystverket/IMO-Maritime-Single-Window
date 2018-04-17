import { Component, OnInit } from '@angular/core';
import { PortCallService } from '../../../../../../shared/services/port-call.service';

@Component({
  selector: 'app-ship-location-time',
  templateUrl: './ship-location-time.component.html',
  styleUrls: ['./ship-location-time.component.css']
})
export class ShipLocationTimeComponent implements OnInit {

  portCallRegistered: boolean;

  constructor(private portCallService: PortCallService) { }

  ngOnInit() {
    this.portCallService.portCallRegistered$.subscribe(
      registered => {
        this.portCallRegistered = registered;
      }
    );
  }

}
