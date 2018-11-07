import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { merge } from 'rxjs/observable/merge';
import { of } from 'rxjs/observable/of';
import { mapTo } from 'rxjs/operators/mapTo';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { CONTENT_NAMES } from '../../shared/constants/content-names';
import { MenuClaims } from '../../shared/constants/menu-claims';
import { MenuEntry } from '../../shared/interfaces/menu-entry.interface';
import { AccountService, ContentService, DbConnectionService, LoginService, } from '../../shared/services/';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: []
})
export class HeaderComponent implements OnInit, OnDestroy {
  online$: Observable<boolean>;

  hasDbConnection = true;
  hasServerConnection = true;
  dbConnectionSubscription: Subscription;

  menuIsCollapsed = true;
  subscription: Subscription;
  loggedIn: boolean;
  redirected: boolean;
  roles: any = new Array();
  userMenuEntries: MenuEntry[];
  userName = 'default';
  userClaims: any;

  iconPath = 'assets/images/icons/128x128/white/';
  menuEntries: MenuEntry[] = [
    {
      title: 'PORT CALLS',
      iconPath: this.iconPath + 'portcall.png',
      menuName: CONTENT_NAMES.VIEW_PORT_CALLS
    },
    {
      title: 'USERS',
      iconPath: this.iconPath + 'user.png',
      menuName: CONTENT_NAMES.REGISTER_USER
    },
    {
      title: 'SHIPS',
      iconPath: this.iconPath + 'ship.png',
      menuName: CONTENT_NAMES.VIEW_SHIPS
    },
    {
      title: 'LOCATIONS',
      iconPath: this.iconPath + 'location.png',
      menuName: CONTENT_NAMES.LOCATIONS
    },
    {
      title: 'ORGANIZATIONS',
      iconPath: this.iconPath + 'pax.png',
      menuName: CONTENT_NAMES.VIEW_ORGANIZATIONS
    }
  ];

  permissions = MenuClaims.PERMISSIONS;

  constructor(
    private loginService: LoginService,
    private contentService: ContentService,
    private accountService: AccountService,
    private dbConnectionService: DbConnectionService,
    private router: Router
  ) {
    this.online$ = merge(
      of(navigator.onLine),
      fromEvent(window, 'online').pipe(mapTo(true)),
      fromEvent(window, 'offline').pipe(mapTo(false))
    );
  }

  ngOnInit() {
    this.subscription = this.loginService.authNavStatus$.subscribe(
      status => (this.loggedIn = status)
    );
    this.contentService.contentName$.subscribe(
      () => (this.menuIsCollapsed = true)
    );

    this.accountService.userClaimsData$.subscribe(userClaims => {
      if (userClaims) {
        const userClaimsTypeMenu = userClaims.filter(
          claim => claim.type === MenuClaims.TYPE
        );
        const keys = Object.keys(this.permissions);
        keys.forEach(key => {
          this.permissions[key] = userClaimsTypeMenu.some(
            claim => claim.value === key
          );
        });
        this.generateMenu();
      }
    });

    if (this.loggedIn) {
      this.accountService.getDisplayName().subscribe(result => {
        if (result) {
          this.userName = result;
        }
      });
    }

    this.startDbConnectionCheck();
  }

  ngOnDestroy() {
    // prevent memory leak by unsubscribing
    this.subscription.unsubscribe();
    this.dbConnectionSubscription.unsubscribe();
  }

  private startDbConnectionCheck() {
    if (this.dbConnectionSubscription) {
      this.dbConnectionSubscription.unsubscribe();
    }
    this.dbConnectionSubscription = Observable.interval(this.hasDbConnection && this.hasServerConnection ? 15000 : 5000).subscribe(() => {
      this.dbConnectionService.getHasDbConnection().subscribe(
        hasConnection => {
          this.hasServerConnection = true;
          if (this.hasDbConnection !== hasConnection) {
            this.hasDbConnection = hasConnection;
            this.startDbConnectionCheck();
          }
        },
        error => {
          this.hasServerConnection = false;
          this.startDbConnectionCheck();
        }
      );
    });
  }

  private generateMenu() {
    this.setMenuEntries();
  }

  private setMenuEntries() {
    // Populates the menu entry list with the entries the user has access to

    this.userMenuEntries = [];
    for (const menuEntry of this.menuEntries) {
      const menuName = menuEntry.menuName;
      if (this.permissions[menuName]) {
        this.userMenuEntries.push(
          this.menuEntries.find(
            newMenuEntry => newMenuEntry.menuName === menuName
          )
        );
      }
    }
  }

  logout() {
    // To prevent logout button from disappearing before
    // redirection has begun
    this.redirected = true;

    this.loginService.logout();
    this.router.navigate(['/auth/login']);
  }

  navigateToMyAccountPage() {
    this.contentService.setContent(CONTENT_NAMES.ACCOUNT_HOME);
  }

  setContent(contentName: string) {
    this.contentService.setContent(contentName);
  }
}
