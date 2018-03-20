import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Credentials } from '../shared/models/credentials.interface';
import { UserService } from '../shared/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

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
  credentials: Credentials = { username: '', password: ''}

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  login({ value, valid }: { value: Credentials, valid: boolean }) {
    this.submitted = true;
    this.isRequesting = true;
    this.errors = '';
    if (valid) {
      this.userService.login(value.username, value.password)
      .finally(() => this.isRequesting = false)
      .subscribe( result => {
        if (result) {
          this.router.navigate(['']);
        }
      }, error => this.errors = error);
    }
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
        this.brandNew = param['brandNew'];
        this.credentials.username = param['username'];
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
