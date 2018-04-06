import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { LoginService } from '../shared/services/login.service';
import { MenuEntry } from '../shared/models/menu-entry.interface';
import { ContentService } from '../shared/services/content.service';
import { Scopes } from './header.scopes';
import { log } from 'util';
import { AccountService } from '../shared/services/account.service';


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

  private getRoles(){
    //Gets the roles of the logged in user
    this.accountService.getRoles().subscribe(
      data => this.roles = data
    );
  }

  private setMenuEntries() {
    this.getRoles();
    console.log(this.roles);

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
    this.loggedIn = this.loginService.isLoggedIn();
    //Temporarily solution not requiring login in GUI
    if(true || !this.loggedIn){
      var t = this.loginService.login("admin", "Tester123");
      console.log("logged in?");
      console.log("auth_token: " + localStorage.getItem("auth_token"));
    }
    
    this.headerScopeService.getEntries("admin");
    this.setMenuEntries();
    this.subscription = this.loginService.authNavStatus$.subscribe(status => this.loggedIn = status);
    this.contentService.contentName$.subscribe(() => this.menuIsCollapsed = true);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
