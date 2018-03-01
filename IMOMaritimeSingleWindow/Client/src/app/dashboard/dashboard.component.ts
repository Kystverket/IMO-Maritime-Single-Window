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

  dashboard_title = "CONFIGURATION MANAGEMENT";
  categories: string[] = []; //Look at this to see how to get data from http

  selectedComponent: string = "";

  // This list should be populated based on your role
  menu_entries: MenuEntry[] = [
    {title: "Users",           iconPath: "",      componentDescription: ["Registrer User", "Edit User", "Delete User"] },
    {title: "Ships",           iconPath: "",      componentDescription: ["Registrer Ship", "Edit Ship", "Get Ships from SafeSeaNet"] },
    {title: "Locations",       iconPath: "",      componentDescription: ["Registrer Location", "Edit Location", "Get Locations from SafeSeaNet" ] },
    {title: "Companies",       iconPath: "",      componentDescription: ["Registrer Company", "Edit Company", "Delete Company"] }
  ];

  constructor(
    private httpService: Http,
    private router: Router  
  ) {}

  loadComponent(component) {
    this.selectedComponent = component;
  }

  ngOnInit() {
    this.httpService.get('/api/categories').subscribe(values => {
      this.categories = values.json() as string[];
    });
  }

}
