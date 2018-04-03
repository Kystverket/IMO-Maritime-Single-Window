import { Component, OnInit } from '@angular/core';
import { PortCallService } from '../../../shared/services/port-call.service';
import { EtaEtdDateTime } from './port-call-registration-forms/ship-location-time/eta-etd/eta-etd-date-time.interface';
import { ContentService } from '../../../shared/services/content.service';

@Component({
  selector: 'app-port-call-registration',
  templateUrl: './port-call-registration.component.html',
  styleUrls: ['./port-call-registration.component.css'],
  providers: [PortCallService]
})
export class PortCallRegistrationComponent implements OnInit {

  selectedComponent: string;

  constructor(private contentService: ContentService) { }

  ngOnInit() { 
    this.contentService.portCallFormName$.subscribe((content) => {
      this.selectedComponent = content;
    });
  }
}
