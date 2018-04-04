import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../shared/services/content.service';
import { PortCallService } from '../../shared/services/port-call.service';

@Component({
  selector: 'app-port-call',
  templateUrl: './port-call.component.html',
  styleUrls: ['./port-call.component.css'],
})
export class PortCallComponent implements OnInit {

  selectedComponent: string;
  
  constructor(private contentService: ContentService, private portCallService: PortCallService) { }l

  ngOnInit() {
  }

  selectRegister() {
    this.portCallService.resetPortCall();
    this.contentService.setContent('Register Port Call');
  }

}
