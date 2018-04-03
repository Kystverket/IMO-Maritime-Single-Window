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

  constructor(private contentService: ContentService) { }

  ngOnInit() { 
    this.contentService.portCallFormName$.subscribe((content) => {
      this.selectedComponent = content;
    });
  }
}
