import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { CONTENT_NAMES } from '../../shared/constants/content-names';
import { MenuClaims } from '../../shared/constants/menu-claims';
import { MenuEntry } from '../../shared/models/menu-entry.interface';
import { AccountService } from '../../shared/services/account.service';
import { ContentService } from '../../shared/services/content.service';
import { LoginService } from '../../shared/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: []
})
export class HeaderComponent implements OnInit, OnDestroy {

  menuIsCollapsed = true;
  subscription: Subscription;
  loggedIn: boolean;
  roles: any = new Array();
  userMenuEntries: MenuEntry[];
  userName = 'default';
  userClaims: any;

  iconPath = 'assets/images/VoyageIcons/128x128/white/';
  menuEntries: MenuEntry[] = [
    { title: 'USERS', iconPath: this.iconPath + 'user.png', menuName: CONTENT_NAMES.REGISTER_USER },
    { title: 'SHIPS', iconPath: this.iconPath + 'ship.png', menuName: CONTENT_NAMES.VIEW_SHIPS },
    { title: 'LOCATIONS', iconPath: this.iconPath + 'location.png', menuName: CONTENT_NAMES.LOCATIONS },
    { title: 'ORGANIZATIONS', iconPath: this.iconPath + 'pax.png', menuName: CONTENT_NAMES.VIEW_ORGANIZATIONS },
    { title: 'PORT CALLS', iconPath: this.iconPath + 'portcall.png', menuName: CONTENT_NAMES.VIEW_PORT_CALLS }
  ];

  permissions = MenuClaims.PERMISSIONS;


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

    this.userMenuEntries = [];
    for (const menu_entry of this.menuEntries) {
      const menuName = menu_entry.menuName;
      if (this.permissions[menuName]) {
        this.userMenuEntries
          .push(this.menuEntries
            .find(me => me.menuName === menuName)
          );
      }
    }
  }

  constructor(
    private loginService: LoginService,
    private contentService: ContentService,
    private accountService: AccountService,
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

    this.accountService.userClaimsData$
      // .finally(() => this.generateMenu())
      .subscribe(
        userClaims => {
          if (userClaims) {
            const userClaimsTypeMenu = userClaims.filter(
              claim => claim.type === MenuClaims.TYPE
            );
            const keys = Object.keys(this.permissions);
            keys.forEach(key => {
              this.permissions[key] = (userClaimsTypeMenu.some(
                claim => claim.value === key
              ));
            });
            this.generateMenu();
          }
        }
      );

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
