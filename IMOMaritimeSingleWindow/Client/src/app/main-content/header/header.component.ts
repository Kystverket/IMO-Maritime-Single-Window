import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { MenuClaims } from 'app/shared/constants/menu-claims';
import { MenuEntry } from 'app/shared/interfaces/menu-entry.interface';
import { AccountService } from 'app/shared/services/account.service';
import { ContentService } from 'app/shared/services/content.service';
import { LoginService } from 'app/shared/services/login.service';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { merge } from 'rxjs/observable/merge';
import { of } from 'rxjs/observable/of';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { mapTo } from 'rxjs/operators/mapTo';
import { DbConnectionService } from 'app/shared/services/db-connection.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: []
})
export class HeaderComponent implements OnInit, OnDestroy {
  online$: Observable<boolean>;

  hasDbConnection = true;
  dbConnectionSubscription: Subscription;

  menuIsCollapsed = true;
  subscription: Subscription;
  loggedIn: boolean;
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
      this.accountService.getUserName().subscribe(result => {
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
    this.dbConnectionSubscription = Observable.interval(this.hasDbConnection ? 30000 : 5000).subscribe(() => {
      this.dbConnectionService.getHasDbConnection().subscribe(hasConnection => {
        if (this.hasDbConnection !== hasConnection) {
          this.hasDbConnection = hasConnection;
          this.startDbConnectionCheck();
        }
      });
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
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

  setContent(contentName: string) {
    this.contentService.setContent(contentName);
  }
}
