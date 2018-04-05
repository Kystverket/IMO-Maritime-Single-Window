import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { LoginService } from '../shared/services/login.service';
import { MenuEntry } from '../shared/models/menu-entry.interface';
import { ContentService } from '../shared/services/content.service';
import { AccountService } from '../content-container/basis-data/user/account.service';
import { Scopes } from './header.scopes';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AccountService, Scopes]
})
export class HeaderComponent implements OnInit, OnDestroy {

  menuIsCollapsed: boolean = true;
  loggedIn: boolean;
  subscription: Subscription;
  roles: any;

  icon_path = "assets/images/VoyageIcons/128x128/white/";
  menu_entries_all: MenuEntry[] = [
    {title: "USERS",       iconPath: this.icon_path + "user.png",       componentDescription: "Register User"},
    {title: "SHIPS",       iconPath: this.icon_path + "ship.png",       componentDescription: "Register Ship"},
    {title: "LOCATIONS",   iconPath: this.icon_path + "location.png",   componentDescription: "Register Location"},
    {title: "COMPANIES",   iconPath: this.icon_path + "pax.png",        componentDescription: "Register Company"},
    {title: "PORT CALL",   iconPath: this.icon_path + "portcall.png",   componentDescription: "Port Call"}
  ];

  menu_entries: MenuEntry[];

  private setMenuEntries() {
    this.roles = this.accountService.getAgentRole();
    
    /* if(this.roles.includes("admin")) {
      this.menu_entries = this.menu_entries_all;
    }
    else if(this.roles.includes("agent")) {
      this.menu_entries = this.menu_entries_all.filter(me => me.title == "PORT CALL");
    } // else menu_entries remains empty */

    this.menu_entries = [];
    let entries : string[] = this.headerScopeService.getEntries("admin"); //TODO: get role of logged in user from backend
    for(let entry of entries){
      for(let meny_entry of this.menu_entries_all){
        if(entry === meny_entry.title) {
          this.menu_entries.push(meny_entry);
        }
      }
    }

    console.log(this.menu_entries);

  }

  constructor(
    private loginService: LoginService,
    private contentService: ContentService,
    private accountService: AccountService,
    private headerScopeService: Scopes) { }

  logout() {
    this.loginService.logout();
  }

  setContent(contentName: string) {
    this.setMenuEntries();
    this.contentService.setContent(contentName);
  }

  ngOnInit() {
    this.headerScopeService.getEntries("admin");
    this.setMenuEntries();
    this.subscription = this.loginService.authNavStatus$.subscribe(status => this.loggedIn = status);

    this.contentService.contentName$.subscribe(() => this.menuIsCollapsed = true);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
