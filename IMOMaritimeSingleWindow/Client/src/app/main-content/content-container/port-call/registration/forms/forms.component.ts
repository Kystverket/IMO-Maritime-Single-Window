import { Component, OnInit } from '@angular/core';
import { ContentService } from 'app/shared/services/content.service';
import { PortCallService } from 'app/shared/services/port-call.service';
import { ShipService } from 'app/shared/services/ship.service';

import { FORM_NAMES } from 'app/shared/constants/form-names';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  selectedComponent: string;

  formNames: any;

  constructor(private contentService: ContentService, private portCallService: PortCallService, private shipService: ShipService) { }

  ngOnInit() {
    this.portCallService.shipData$.subscribe(
      shipResult => {
        this.shipService.setShipOverviewData(shipResult);
      }
    );
    this.contentService.portCallFormName$.subscribe(
      content => {
        this.selectedComponent = content;
      }
    );

    this.formNames = FORM_NAMES;
  }
}
