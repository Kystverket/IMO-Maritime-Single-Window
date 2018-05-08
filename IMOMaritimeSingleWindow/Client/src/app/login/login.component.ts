import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Credentials } from '../shared/models/credentials.interface';
import { LoginService } from '../shared/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../shared/services/auth-service';
import { AccountService } from '../shared/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {

  login_title = "LOGIN";

  private subscription: Subscription;

  brandNew: boolean;
  errors: string;
  isRequesting: boolean;
  submitted: boolean = false;
  credentials: Credentials = { userName: '', password: ''}

  constructor(private loginService: LoginService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private accountService: AccountService
  ) { }

  login({ value, valid }: { value: Credentials, valid: boolean }) {
    this.submitted = true;
    this.isRequesting = true;
    this.errors = '';
    if (valid) {
      this.loginService.login(value.userName, value.password)
      .finally(() => this.isRequesting = false)
      .subscribe(result => 
        {
        // Login succeeded
        if (result) {
          // Set user claims observable so they are
          // available for the entire application
          this.accountService.getUserClaims()
          // Navigate to root when done
          .finally( () => this.router.navigate(['']) )  
          .subscribe(result => 
            {
              if(result) {
                console.log(result);
                this.accountService.setUserClaims(result);
              }
            })

          
        }
        // Login failed
        }, error => this.errors = error
      )
      }
    }

  ngOnInit() {
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
        this.brandNew = param['brandNew'];
        //this.credentials.userName = param['userName'];
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
