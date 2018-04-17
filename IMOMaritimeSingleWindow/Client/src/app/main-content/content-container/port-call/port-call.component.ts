import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../shared/services/content.service';
import { PortCallService } from '../../../shared/services/port-call.service';

@Component({
  selector: 'app-port-call',
  templateUrl: './port-call.component.html',
  styleUrls: ['./port-call.component.css'],
})
export class PortCallComponent implements OnInit {

  selectedComponent: string;
  
  constructor(private contentService: ContentService, private portCallService: PortCallService) { }

  ngOnInit() {
  }

  selectRegister() {
    this.portCallService.wipeServiceData();
    this.contentService.setPortCallForm('Ship, Location and Time');
    this.contentService.setContent('Register Port Call');
  }

}
