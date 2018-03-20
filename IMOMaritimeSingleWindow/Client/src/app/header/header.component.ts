import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { UserService } from '../shared/services/user.service';
import { MenuEntry } from '../dashboard/menu-entry.interface';
import { ContentService } from '../shared/services/content.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  menuIsCollapsed: boolean = true;
  loggedIn: boolean;
  subscription: Subscription;

  icon_path = "assets/images/VoyageIcons/128x128/white/";
  menu_entries: MenuEntry[] = [
    {title: "USERS",       iconPath: this.icon_path + "pax.png",        componentDescription: "Register User" },
    {title: "SHIPS",       iconPath: this.icon_path + "ship.png",       componentDescription: "Register Ship" },
    {title: "LOCATIONS",   iconPath: this.icon_path + "location.png",   componentDescription: "Register Location" },
    {title: "COMPANIES",   iconPath: this.icon_path + "pax.png",        componentDescription: "Register Company" },
    {title: "PORT CALL",   iconPath: this.icon_path + "portcall.png",   componentDescription: "Register Port Call" }
  ];

  constructor(private userService: UserService, private contentService: ContentService) { }

  logout() {
    this.userService.logout();
  }

  setContent(contentName: string) {
    this.contentService.setContent(contentName);
  }

  ngOnInit() {
    this.subscription = this.userService.authNavStatus$.subscribe(status => this.loggedIn = status);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
