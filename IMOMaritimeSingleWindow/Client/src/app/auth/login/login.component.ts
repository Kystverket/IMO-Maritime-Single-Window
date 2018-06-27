// Based on https://github.com/mmacneil/AngularASPNETCore2WebApiAuth/blob/master/src/src/app/account/login-form/login-form.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { Credentials } from 'app/shared/interfaces/credentials.interface';
import { AccountService } from 'app/shared/services/account.service';
import { ContentService } from 'app/shared/services/content.service';
import { LoginService } from 'app/shared/services/login.service';
import 'rxjs/add/operator/finally';
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
    private passwordService: PasswordService
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

  setResetRequested() {
    this.passwordService.setResetRequested(true);
  }

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.queryParams.subscribe(
      (param: any) => {
        this.brandNew = param['brandNew'];
        // this.credentials.userName = param['userName'];
      }
    );
    this.passwordService.setResetRequested(false);
  }

}
