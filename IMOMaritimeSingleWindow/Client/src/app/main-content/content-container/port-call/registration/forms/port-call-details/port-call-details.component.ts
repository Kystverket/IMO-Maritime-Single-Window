import { Component, OnInit } from '@angular/core';
import { PortCallService } from '../../../../../../shared/services/port-call.service';

@Component({
  selector: 'app-port-call-details',
  templateUrl: './port-call-details.component.html',
  styleUrls: ['./port-call-details.component.css']
})
export class PortCallDetailsComponent implements OnInit {
  detailsRegistered: boolean;

  constructor(private portCallService: PortCallService) { }
  
  ngOnInit() {
    this.portCallService.detailsRegistered$.subscribe(
      registered => {
        this.detailsRegistered = registered;
      }
    );
  }

}
