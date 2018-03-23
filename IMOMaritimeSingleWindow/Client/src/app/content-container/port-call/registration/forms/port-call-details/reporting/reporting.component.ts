import { Component, OnInit } from '@angular/core';
import { PortCallService } from '../../../../../../shared/services/port-call.service';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit {

  baseIconUrl: string = "assets/images/VoyageIcons/128x128/";
  checkboxes: any = [
    {name: "Hazmat",  icon: "hazard.png", checked: false},
    {name: "Bunkers", icon: "barrel.png", checked: false},
    {name: "Cargo",   icon: "cargo.png",  checked: false}
  ];

  constructor(private portCallService: PortCallService) { }

  checkboxChecked(checkboxModel) {
    checkboxModel.checked = !checkboxModel.checked;

    this.portCallService.setReportingForThisPortCallData(this.checkboxes);
  }

  ngOnInit() {
    this.portCallService.reportingForThisPortCallData$.subscribe((data) => {
      if(data != null){
        this.checkboxes = data;
      }
    });
  }

}
