import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../../../../../shared/services/user.service';
import { UserModel } from '../../../../../shared/models/user-model';
import { Role } from '../../../../../shared/models/role-model';
import { AccountService } from '../../../../../shared/services/account.service';
import { AuthService } from '../../../../../shared/services/auth-service';
import { LoginService } from '../../../../../shared/services/login.service';
import { UserModelWithPassword } from '../../../../../shared/models/UserModelWithPassword';
import { OrganizationService } from '../../../../../shared/services/organization.service';



@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
  providers: [UserModel, UserService, AccountService]
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
    roleName: '',
    organizationId: ''
  };
  organizationName: '';
  isDrafted: boolean;
  emailTaken: boolean;
  emailTakenSet: boolean;
  emailSubmitted: boolean;
  userRegistrationDisabled: boolean;

  constructor(
    private userModel: UserModel,
    private userService: UserService,
    private accountService: AccountService,
    private authService: AuthService,
    private loginService: LoginService,
    private organizationService: OrganizationService
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

    hasPhoneNumber() { return this.user.phoneNumber != ''; }
    hasName() { return this.user.firstName != '' && this.user.lastName != ''; }

    userExists(emailValid: boolean) {
      if(emailValid){
        this.emailTakenSet = true;
        return this.accountService.userExistsByEmail(this.user.email)
        .subscribe(result => {
          if(result){
            this.emailTaken = true;
          } else {
            this.emailTaken = false;
          }
          this.emailSubmitted = true;
        })
      }
    }

    isEmailTaken() : boolean {
      return !this.emailTakenSet ? true : this.emailTaken;
    }
    setNotSubmitted() { this.emailSubmitted = false; }

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

  testRegisterUserWithPassword() {
    this.isRequesting = true;
    this.errors = '';
    this.userRegistrationDisabled = true;
  }

  registerUserWithPassword() {
    this.isRequesting = true;
    this.errors = '';
    this.accountService.registerUserWithPassword(this.user)
    .finally( () => { this.userRegistrationDisabled = true; } )
    .subscribe(
      result => {
       if (result) {
         console.log('account created!');
       }
      }, error => this.errors = error
     );
     
  }

  startNewUserRegistration() {
    // Reset variables so that forms appear with fresh values
    this.resetValues();
  }

  resetValues() {
    // Reset variables so that forms appear with fresh values
    
    this.selectedRole = '';
    this.errors = '';
    this.isRequesting = false;
    this.submitted = false;

    // Reset user model
    this.user.email = '';
    this.user.phoneNumber = '';
    this.user.firstName = '';
    this.user.lastName = '';
    this.user.password = '';
    this.user.roleName = '';
    this.user.organizationId = '';

    this.organizationName = '';

    this.isDrafted = false;
    this.emailTaken = false;
    this.emailTakenSet = false;
    this.emailSubmitted = false;
    this.userRegistrationDisabled = false;
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

  ngOnInit() {
    this.subscription = this.loginService.authNavStatus$.subscribe(status => this.loggedIn = status);
    this.accountService.getAllRoles().subscribe(
      data => this.roleList = data
    );

    this.organizationService.organizationData$.subscribe(
      result => {
        if(result){
          this.user.organizationId = result.organizationId;
          this.organizationName = result.name;
        }
      }
    )

  }



}
