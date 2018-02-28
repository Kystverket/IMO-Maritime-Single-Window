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

  // This list should be populated based on your role
  menu_entries: MenuEntry[] = [
    {title: "Users",       iconPath: "",     actions: [
      {description: "Registrer User", link: "/user/registrer"}, 
      {description: "Edit User", link: "/user/edit"}, 
      {description: "Delete User", link: "/user/delete"}
    ]},
    {title: "Ships",       iconPath: "",     actions: [
      {description: "Registrer Ship", link: "/ship/registrer"}, 
      {description: "Edit Ship", link: "/ship/edit"}, 
      {description: "Get Ships from SafeSeaNet", link: "/404"}
    ]},
    {title: "Locations",       iconPath: "",     actions: [
      {description: "Registrer Location", link: "/location/registrer"}, 
      {description: "Edit Location", link: "/location/edit"}, 
      {description: "Get Locations from SafeSeaNet", link: "/404"}
    ]},
    {title: "Companies",       iconPath: "",     actions: [
      {description: "Registrer Company", link: "/company/registrer"}, 
      {description: "Edit Company", link: "/company/edit"}, 
      {description: "Delete Company", link: "/company/delete"}
    ]}
  ];

  constructor(
    private httpService: Http,
    private router: Router  
  ) {}

  executeAction(action) {
    console.log(action.link)
    this.router.navigate([action.link]);
  }

  ngOnInit() {
    this.httpService.get('/api/categories').subscribe(values => {
      this.categories = values.json() as string[];
    });
  }

}
