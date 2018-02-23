import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { MenuEntry } from './menu-entry';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu_title = "CONFIGURATION MANAGEMENT";
  categories: string[] = []; //Look at this to see how to get data from http

  // This list should be populated based on your role
  menu_entries: MenuEntry[] = [
    { title: "Users", icon: null, actions: ["Create User", "Edit User", "Delete User"] },
    { title: "Profiles", icon: null, actions: ["Create Profile", "Edit Profile"] },
    { title: "Formalities", icon: null, actions: ["Create Formality", "Edit Formality"] },
    { title: "Regualtory Information", icon: null, actions: ["Manage Regulatory Information"] },
    { title: "Ships", icon: null, actions: ["Create Ship", "Edit Ship", "Get Ships from SafeSeaNet"] },
    { title: "Shipping Companies", icon: null, actions: ["Create Shipping Company", "Edit Shipping Company"] },
    { title: "Locations", icon: null, actions: ["Create Location", "Edit Location", "Get Locations from SafeSeaNet"] },
    { title: "Areas", icon: null, actions: ["Create Area", "Edit Area"] },
    { title: "Organisations", icon: null, actions: ["Create Organisation", "Edit Organisation"] },
    { title: "Attachment Types", icon: null, actions: ["Create Attachment Type", "Edit Attachment Type"] },
    { title: "National Parameters", icon: null, actions: ["Create National Parameter", "Edit National Parameter"] }
  ];

  constructor(private _httpService: Http) { }

  ngOnInit() {
    this._httpService.get('/api/categories').subscribe(values => {
      this.categories = values.json() as string[];
    });
  }

}
