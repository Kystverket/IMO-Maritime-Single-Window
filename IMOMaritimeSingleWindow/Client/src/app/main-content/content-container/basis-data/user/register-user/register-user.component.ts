import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../../../../../shared/services/user.service';
import { UserModel } from '../../../../../shared/models/user-model';
import { Role } from '../../../../../shared/models/role-model';
import { AccountService } from '../../../../../shared/services/account.service';
import { AuthService } from '../../../../../shared/services/auth-service';
import { LoginService } from '../../../../../shared/services/login.service';
import { ShipService } from '../../../../../shared/services/ship.service';
import { UserModelWithPassword } from '../../../../../shared/models/UserModelWithPassword';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
  providers: [UserModel, UserService, AccountService, ShipService]
})

export class RegisterUserComponent implements OnInit {

  Selected: boolean;

  companyTerm: string;
  selectedRole: any;
  roleList: any[];
  subscription: Subscription;
  loggedIn: boolean;
  brandNew: boolean;
  errors: string;
  isRequesting: boolean;
  submitted = false;
  user: UserModelWithPassword = {
    email: '',
    phoneNumber: '',
    firstName: '',
    lastName: '',
    password: '',
    roleName: ''
  };
  isDrafted: boolean;

  constructor(
    private userModel: UserModel,
    private userService: UserService,
    private accountService: AccountService,
    private authService: AuthService,
    private loginService: LoginService
    ) { }

    saveUserModel({ value, valid }: { value: UserModel, valid: boolean }) {
      if (valid) {
        this.isDrafted = true;
        console.log("user:", this.user);
        console.log("is drafted");
      }
     }

    logUserModel(){
      console.log(this.user);
    }

  registerUser({ value, valid }: { value: UserModel, valid: boolean }) {
    this.submitted = true;
    this.isRequesting = true;
    this.errors = '';
    if (valid) {
      this.accountService.registerUser(value).subscribe(
         result => {
          if (result) {
            console.log('account created!');
          }
         }, error => this.errors = error
        );
    }
  }

  registerUserWithPassword() {
    this.isRequesting = true;
    this.errors = '';
    this.accountService.registerUserWithPassword(this.user).subscribe(
      result => {
       if (result) {
         console.log('account created!');
       }
      }, error => this.errors = error
     );
  }



  /* registerUserWithPassword({ value, valid }: { value: UserModelWithPassword, valid: boolean }) {
    this.submitted = true;
    this.isRequesting = true;
    this.errors = '';
    if (valid) {
      this.accountService.registerUserWithPassword(value).subscribe(
         result => {
          if (result) {
            console.log('account created!');
          }
         }, error => this.errors = error
        );
    }
  } */


  /* canSetPortCallClearance(): void {
    if (!this.loggedIn) {
      return;
    }
    this.authService.canSetClearance().subscribe(
      result => {
        if (result) {
          console.log(result);
          this.canClear = true;
        }
      }, error => {
          console.log(error.status);
      }
    );
  } */

  ngOnInit() {
    this.subscription = this.loginService.authNavStatus$.subscribe(status => this.loggedIn = status);
    this.accountService.getAllRoles().subscribe(
      data => this.roleList = data
    );
  }



}
