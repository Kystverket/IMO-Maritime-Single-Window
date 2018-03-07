import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';

import { MenuEntry } from './menu-entry.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboard_title = "DASHBOARD";
  icon_path = "assets/images/VoyageIcons/128x128/white/"
  categories: string[] = []; //Look at this to see how to get data from http

  selectedComponent: string = "";

  // This list should be populated based on your role
  menu_entries: MenuEntry[] = [
    {title: "USERS",           iconPath: this.icon_path + "pax.png",      componentDescription: ["Registrer User", "Edit User", "Delete User"] },
    {title: "SHIPS",           iconPath: this.icon_path + "ship.png",      componentDescription: ["Registrer Ship", "Edit Ship", "Get Ships from SafeSeaNet"] },
    {title: "LOCATIONS",       iconPath: this.icon_path + "voyage.png",      componentDescription: ["Registrer Location", "Edit Location", "Find Location" ] },
    {title: "COMPANIES",       iconPath: this.icon_path + "pax.png",      componentDescription: ["Registrer Company", "Edit Company", "Delete Company"] },
    {title: "PORT CALL",       iconPath: this.icon_path + "portcall.png",      componentDescription: ["Registrer Port Call"] }
  ];

  constructor(
    private httpService: Http,
    private router: Router  
  ) {}

  loadComponent(component) {
    this.selectedComponent = component;
  }

  ngOnInit() {
    this.httpService.get('/api/ship/254168').subscribe(values => {
      
      //this.categories = values.json() as string[];
    });
  }

}
