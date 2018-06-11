import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CONTENT_NAMES } from '../../shared/constants/content-names';
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

  menuIsCollapsed = true;
  subscription: Subscription;
  loggedIn: boolean;
  roles: any = new Array();
  user_menu_entries: MenuEntry[];
  userName = 'default';
  userClaims: any;

  icon_path = 'assets/images/VoyageIcons/128x128/white/';
  menu_entries: MenuEntry[] = [
    { title: 'USERS', iconPath: this.icon_path + 'user.png', menuName: CONTENT_NAMES.REGISTER_USER },
    { title: 'SHIPS', iconPath: this.icon_path + 'ship.png', menuName: CONTENT_NAMES.VIEW_SHIPS },
    { title: 'LOCATIONS', iconPath: this.icon_path + 'location.png', menuName: CONTENT_NAMES.LOCATIONS },
    { title: 'ORGANIZATIONS', iconPath: this.icon_path + 'pax.png', menuName: CONTENT_NAMES.VIEW_ORGANIZATIONS },
    { title: 'PORT CALLS', iconPath: this.icon_path + 'portcall.png', menuName: CONTENT_NAMES.VIEW_PORT_CALLS }
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
      let menuName = menu_entry.menuName;
      if (this.permissions[menuName]) {
        this.user_menu_entries
          .push(this.menu_entries
            .find(me => me.menuName == menuName)
          );
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

  }
  ngOnDestroy() {
    // prevent memory leak by unsubscribing
    this.subscription.unsubscribe();
  }
}
