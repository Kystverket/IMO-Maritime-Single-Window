import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Rx';

import { LoginService } from '../../shared/services/login.service';
import { MenuEntry } from '../../shared/models/menu-entry.interface';
import { ContentService } from '../../shared/services/content.service';
import { log } from 'util';
import { AccountService } from '../../shared/services/account.service';
import { MenuService } from './menu.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AccountService, MenuService]
})
export class HeaderComponent implements OnInit, OnDestroy {

  menuIsCollapsed: boolean = true;
  subscription: Subscription;
  loggedIn: boolean;
  roles: any = new Array();
  user_menu_entries: MenuEntry[];
  userName: string = "default";

  icon_path = "assets/images/VoyageIcons/128x128/white/";
  menu_entries: MenuEntry[] = [
    {title: "USERS",       iconPath: this.icon_path + "user.png",       componentDescription: "Register User" },
    {title: "SHIPS",       iconPath: this.icon_path + "ship.png",       componentDescription: 'Register Ship' },
    {title: 'LOCATIONS',   iconPath: this.icon_path + 'location.png',   componentDescription: 'Register Location' },
    {title: 'ORGANIZATIONS',   iconPath: this.icon_path + 'pax.png',        componentDescription: 'Register Organization' },
    {title: 'PORT CALL',   iconPath: this.icon_path + 'portcall.png',   componentDescription: 'Port Call' }
  ];


  private generateMenu() {

    /* this.menuService.getMenuEntries()
    .finally( () => this.setMenuEntries()  )
    .subscribe(
      data => {
        this.user_menu_entries = data.menu_entries;
      }
    ) */

    // Hard-coded
    this.user_menu_entries = this.menu_entries;

    // This should instead be executed when database is ready to be queried
    /*
    this.menuService.getMenuEntries()
    .finally( () => this.setMenuEntries()  )
    .map(data => data.menu_entries)
    .subscribe(
      data => {
        data.forEach(element => {
          console.log(`entry: ${element}`);
        });
        this.user_menu_entries = data;
      }
    )
    */

  }

  private getAllRoles() {
    // Gets the roles of the logged in user
    this.accountService.getAllRoles().subscribe(
      data => {
        this.roles = data;
      }
    );
  }

  private setMenuEntries() {
    // Populates the menu entry list with the entries the user has access to
    this.menu_entries = [];
    for (let title of this.user_menu_entries){
      for (let meny_entry of this.menu_entries){
        if (title.title === meny_entry.title) {
          this.menu_entries.push(meny_entry);
        }
      }
    }
  }

  constructor(
    private loginService: LoginService,
    private contentService: ContentService,
    private accountService: AccountService,
    private menuService: MenuService,
    private router: Router
    ) {
      
    }
    

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

  setContent(contentName: string) {
    // this.setMenuEntries();
    this.contentService.setContent(contentName);
  }

  ngOnInit() {
      this.subscription = this.loginService.authNavStatus$.subscribe(status => this.loggedIn = status);
      this.contentService.contentName$.subscribe(() => this.menuIsCollapsed = true);

      console.log('is logged in when loading header component? ' + this.loggedIn );

      this.generateMenu();

      if (this.loggedIn) {
        this.accountService.getUserName().subscribe(
          result => {
            if (result) {
              this.userName = result;
            }
          }
        );
      }

      // This should instead be executed when database is ready to be queried
      
      // Temporarily solution not requiring login in GUI
      /* if(!this.loginService.isLoggedIn()){
        this.loginService.login("admin@test.no", "Tester123")
        .subscribe(
          result => {
            if(result)
              console.log("Login successful");
            this.generateMenu();
            //this.getMenuEntries();
            //this.setMenuEntries();
          }
        )
      } */

      /* console.log("ALL ROLES");
    this.getAllRoles();
    console.log(this.roles);

    console.log("ROLES FOR USER");
    this.getRoles();
    console.log(this.roles); */
    
  }
  ngOnDestroy() {
    // prevent memory leak by unsubscribing
    this.subscription.unsubscribe();
  }
}
