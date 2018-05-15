import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MenuClaims } from '../../shared/constants/menu-claims';
import { MenuEntry } from '../../shared/models/menu-entry.interface';
import { AccountService } from '../../shared/services/account.service';
import { ContentService } from '../../shared/services/content.service';
import { LoginService } from '../../shared/services/login.service';
import { MenuService } from './menu.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [MenuService]
})
export class HeaderComponent implements OnInit, OnDestroy {

  menuIsCollapsed: boolean = true;
  subscription: Subscription;
  loggedIn: boolean;
  roles: any = new Array();
  user_menu_entries: MenuEntry[];
  userName: string = "default";
  userClaims: any;

  icon_path = "assets/images/VoyageIcons/128x128/white/";
  menu_entries: MenuEntry[] = [
    { title: "USERS", iconPath: this.icon_path + "user.png", componentDescription: "Register User" },
    { title: "SHIPS", iconPath: this.icon_path + "ship.png", componentDescription: "Ship" },
    { title: 'LOCATIONS', iconPath: this.icon_path + 'location.png', componentDescription: 'Register Location' },
    { title: 'ORGANIZATIONS', iconPath: this.icon_path + 'pax.png', componentDescription: 'Organization' },
    { title: 'PORT CALL', iconPath: this.icon_path + 'portcall.png', componentDescription: 'Port Call' }
  ];


  private generateMenu() {
    this.setMenuEntries();
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

    this.user_menu_entries = [];
    for (let menu_entry of this.menu_entries) {
      let title = menu_entry.title;
      if (this.permissions[title]) {
        this.user_menu_entries
          .push(this.menu_entries
            .find(me => me.title == title)
          );
      }
    }

    /* this.menu_entries = [];
    for (let title of this.user_menu_entries){
      for (let meny_entry of this.menu_entries){
        if (title.title === meny_entry.title) {
          this.menu_entries.push(meny_entry);
        }
      }
    } */
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

  permissions = MenuClaims.PERMISSIONS;

  ngOnInit() {
    this.subscription = this.loginService.authNavStatus$.subscribe(status => this.loggedIn = status);
    this.contentService.contentName$.subscribe(() => this.menuIsCollapsed = true);

    this.accountService.userClaimsData$
      //.finally(() => this.generateMenu())
      .subscribe(
        userClaims => {
          if (userClaims) {
            let userClaimsTypeMenu = userClaims.filter(
              claim => claim.type == MenuClaims.TYPE
            );
            var keys = Object.keys(this.permissions);
            keys.forEach(key => {
              this.permissions[key] = (userClaimsTypeMenu.some(
                claim => claim.value == key
              ))
            });
            this.generateMenu();
          }
        }
      )

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
