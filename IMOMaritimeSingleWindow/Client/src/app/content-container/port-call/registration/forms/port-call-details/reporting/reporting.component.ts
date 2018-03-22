import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit {

  baseIconUrl: string = "assets/images/VoyageIcons/128x128/";
  checkboxes: any = [
    {name: "Hazmat",  icon: this.baseIconUrl+"hazard.png", checked: false},
    {name: "Bunkers", icon: this.baseIconUrl+"barrel.png", checked: false}
  ];

  constructor() { }

  checkboxChecked(checkboxModel) {
    checkboxModel.checked = !checkboxModel.checked;
    console.log(checkboxModel.name + ' ' + checkboxModel.checked);
    
    
    
  }

  ngOnInit() {
  }

}
