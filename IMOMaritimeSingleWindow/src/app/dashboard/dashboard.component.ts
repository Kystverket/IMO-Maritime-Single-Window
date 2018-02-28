import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { MenuEntryInterface } from './menu-entry.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboard_title = "CONFIGURATION MANAGEMENT";
  categories: string[] = []; //Look at this to see how to get data from http

  // This list should be populated based on your role
  menu_entries: MenuEntryInterface[] = [
    { title: "Users",                   iconPath: "",     actions: ["Registrer User", "Edit User", "Delete User"] },
    { title: "Ships",                   iconPath: "",     actions: ["Registrer Ship", "Edit Ship", "Get Ships from SafeSeaNet"] },
    { title: "Locations",               iconPath: "",     actions: ["Registrer Location", "Edit Location", "Get Locations from SafeSeaNet"] },
    { title: "Companies",               iconPath: "",     actions: ["Registrer Company", "Edit Company"] },
    /*
    { title: "Profiles",                iconPath: "", actions: ["Create Profile", "Edit Profile"] },
    { title: "Formalities",             iconPath: "", actions: ["Create Formality", "Edit Formality"] },
    { title: "Regualtory Information",  iconPath: "", actions: ["Manage Regulatory Information"] },
    { title: "Shipping Companies",      iconPath: "", actions: ["Create Shipping Company", "Edit Shipping Company"] },
    { title: "Areas",                   iconPath: "", actions: ["Create Area", "Edit Area"] },
    { title: "Organisations",           iconPath: "", actions: ["Create Organisation", "Edit Organisation"] },
    { title: "Attachment Types",        iconPath: "", actions: ["Create Attachment Type", "Edit Attachment Type"] },
    { title: "National Parameters",     iconPath: "", actions: ["Create National Parameter", "Edit National Parameter"] },*/
  ];

  menu_entry_selected() {
    
  }

  constructor(private _httpService: Http) { }

  ngOnInit() {
    this._httpService.get('/api/categories').subscribe(values => {
      this.categories = values.json() as string[];
    });
  }

}
