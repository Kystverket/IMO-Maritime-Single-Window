import { Component, OnInit } from '@angular/core';
import { PortCallService } from '../../../../../../shared/services/port-call.service';

const NO_OF_CREW = "No. of Crew";
const NO_OF_PASSENGERS = "No. of Passengers";
const ACTUAL_DRAUGHT = "Actual Draught";
const AIR_DRAUGHT = "Air Draught";
const GROSS_GROSS_WEIGHT = "Gross Gross Weight";
const GROSS_WEIGHT = "Gross Weight";

@Component({
  selector: 'app-port-call-details',
  templateUrl: './port-call-details.component.html',
  styleUrls: ['./port-call-details.component.css']
})
export class PortCallDetailsComponent implements OnInit {

  portCallDetailsInfo: any[] = [
    { description: NO_OF_CREW, data: null },
    { description: NO_OF_PASSENGERS, data: null },
    { description: ACTUAL_DRAUGHT, data: null },
    { description: AIR_DRAUGHT, data: null },
    { description: GROSS_GROSS_WEIGHT, data: null },
    { description: GROSS_WEIGHT, data: null }
  ];

  constructor(private portCallService: PortCallService) { }

  ngOnInit() {
    
  }
}
