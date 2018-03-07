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
    {title: "Users",           iconPath: this.icon_path + "pax.png",      componentDescription: ["Registrer User", "Edit User", "Delete User"] },
    {title: "Ships",           iconPath: this.icon_path + "ship.png",      componentDescription: ["Registrer Ship", "Edit Ship", "Get Ships from SafeSeaNet"] },
    {title: "Locations",       iconPath: this.icon_path + "voyage.png",      componentDescription: ["Registrer Location", "Edit Location", "Get Locations from SafeSeaNet" ] },
    {title: "Companies",       iconPath: this.icon_path + "pax.png",      componentDescription: ["Registrer Company", "Edit Company", "Delete Company"] }
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
      console.log(values);
      //this.categories = values.json() as string[];
    });
  }

}
