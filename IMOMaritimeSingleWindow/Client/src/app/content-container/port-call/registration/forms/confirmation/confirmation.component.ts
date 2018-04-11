import { Component, OnInit } from '@angular/core';
import { PortCallService } from '../../../../../shared/services/port-call.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  iconPath = "assets/images/VoyageIcons/128x128/";
  falForms: any;

  constructor(private portCallService: PortCallService) { }

  ngOnInit() {
    this.portCallService.reportingForThisPortCallData$.subscribe((falForms) => {
      if (falForms != null) {
        this.falForms = falForms;
      }
    });
  }
}
