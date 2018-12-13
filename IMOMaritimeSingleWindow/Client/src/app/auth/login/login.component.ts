// Based on https://github.com/mmacneil/AngularASPNETCore2WebApiAuth/blob/master/src/src/app/account/login-form/login-form.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { Credentials } from 'app/shared/interfaces/credentials.interface';
import { AccountService, AuthService, ContentService, LoginService } from 'app/shared/services/';
import { MenuClaims } from '../../shared/constants/menu-claims';
import { PasswordService } from '../password.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login_title = 'LOGIN';

  brandNew: boolean;
  errors: string;
  isRequesting: boolean;
  submitted = false;
  credentials: Credentials = { userName: '', password: '' };

  constructor(
    private loginService: LoginService,
    private contentService: ContentService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private accountService: AccountService,
    private authService: AuthService,
    private passwordService: PasswordService
  ) {}

  private logError(error: any) {
    this.errors = error;
    this.credentials.password = '';
  }

  async login({ value, valid }: { value: Credentials; valid: boolean }) {
    this.submitted = true;
    this.errors = '';
    if (valid) {
      this.isRequesting = true;

      const jwtResponse = await this.loginService
        .login(value)
        .toPromise()
        .then(
          jwt => {
            if (jwt) {
              return jwt;
            }
            // Login failed
          },
          error => {this.logError(error); console.log(error);}
        );
      if (!this.errors) {
        await this.accountService
          .getUserClaims()
          .toPromise()
          .then(
            claims => {
              if (claims) {
                this.accountService.setUserClaims(claims);
                if (this.authService.hasPortCallMenuClaim(claims)) {
                  this.contentService.setContent(CONTENT_NAMES.VIEW_PORT_CALLS);
                  this.router.navigate(['']);
                }
              } else {
                this.loginService.logout();
                this.router.navigate(['/error']);
              }
              // Error getting user claims
            },
            error => this.logError(error)
          );
      }
      this.isRequesting = false;
    }
  }

  hasPortCallMenuClaim(claims: any[]): boolean {
    return claims
      .filter(claim => claim.type === MenuClaims.TYPE)
      .some(claim => claim.value === MenuClaims.PORT_CALL);
  }

  setResetRequested() {
    this.passwordService.setResetRequested(true);
  }

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.queryParams.subscribe((param: any) => {
      this.brandNew = param['brandNew'];
      // this.credentials.userName = param['userName'];
    });
    this.passwordService.setResetRequested(false);
  }
}
