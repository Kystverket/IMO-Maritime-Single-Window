// Based on https://github.com/mmacneil/AngularASPNETCore2WebApiAuth/blob/master/src/src/app/account/login-form/login-form.component.ts

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Credentials } from 'app/shared/models/credentials.interface';
import { AccountService } from 'app/shared/services/account.service';
import { AuthService } from 'app/shared/services/auth-service';
import { ContentService } from 'app/shared/services/content.service';
import { LoginService } from 'app/shared/services/login.service';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {

  login_title = 'LOGIN';

  private subscription: Subscription;

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
    private authService: AuthService,
    private accountService: AccountService
  ) { }

  login({ value, valid }: { value: Credentials, valid: boolean }) {
    this.submitted = true;
    this.errors = '';
    if (valid) {
      this.isRequesting = true;
      this.loginService.login(value.userName, value.password)
        .finally(() => {
          this.isRequesting = false;
        })
        .subscribe(result => {
          // Login succeeded
          if (result) {
            // Set user claims observable so they are
            // available for the entire application
            this.accountService.getUserClaims()
              // Navigate to root when done
              .finally(() => {
                this.contentService.setContent(CONTENT_NAMES.VIEW_PORT_CALLS);
                this.router.navigate(['']);
              })
              .subscribe(claims => {
                if (claims) {
                  this.accountService.setUserClaims(claims);
                  localStorage.setItem('user_claims', JSON.stringify(claims));
                }
              });
          }
          // Login failed
        }, error => {
          this.errors = error;
          this.credentials.password = '';
          }
        );
    }
  }

  ngOnInit() {
    // subscribe to router event
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
        this.brandNew = param['brandNew'];
        // this.credentials.userName = param['userName'];
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
