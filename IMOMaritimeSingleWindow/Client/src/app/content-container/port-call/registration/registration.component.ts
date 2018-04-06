import { Component, OnInit } from '@angular/core';
import { PortCallService } from '../../../shared/services/port-call.service';
import { EtaEtdDateTime } from './forms/ship-location-time/eta-etd/eta-etd-date-time.interface';
import { ContentService } from '../../../shared/services/content.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  selectedComponent: string;
  portCallRegistered: boolean;

  constructor(private contentService: ContentService, private portCallService: PortCallService) { }

  ngOnInit() {
    this.contentService.portCallFormName$.subscribe(
      content => {
        this.selectedComponent = content;
      }
    );
    this.portCallService.portCallRegistered$.subscribe(
      registered => {
        this.portCallRegistered = registered;
        
        //this.portCallRegistered = true; // Showing the progress bar for debug and development purposes
      }
    );
  }
}
