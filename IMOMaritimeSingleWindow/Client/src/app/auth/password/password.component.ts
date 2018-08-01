import { Component, OnInit, Input } from '@angular/core';
import { TokenQueryModel } from '../../shared/models/token-query-model';
import { AccountService } from '../../shared/services/account.service';
import { UriQueryService } from '../../shared/services/uri-query.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PasswordResetModel } from '../../shared/models/password-reset-model';
import { PasswordChangeModel } from '../../shared/models/password-change-model';
import { PASSWORD_COMPONENT_NAME, PASSWORD_COMPONENT_TYPE } from '../../shared/constants/password-component-types';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {


  @Input() purpose: string;

  currentPassword = '';
  inputOne = '';
  inputTwo = '';
  passwordMatch = false;
  fieldsFilled = false;
  errors: string;
  isChangeComponent = false;
  fieldFocused = true;

  private componentName: string;
  private componentType: number;

  private tokenQueryModel: TokenQueryModel;
  private passwordResetToken?: string;

  constructor(
    private accountService: AccountService,
    private uriQueryService: UriQueryService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  validateFields() {
    this.fieldsFilled = this.checkFieldsFilled();
    this.passwordMatch = this.checkPasswordsMatch();
  }

  private checkFieldsFilled(): boolean {
    if (this.componentType === PASSWORD_COMPONENT_TYPE.CHANGE) {
      return this.inputOne !== '' && this.inputTwo !== '' && this.currentPassword !== '';
    } else {
      return this.inputOne !== '' && this.inputTwo !== '';
    }
  }

  checkPasswordsMatch(): boolean {
     return !(this.inputOne === '' || this.inputTwo === '') &&
      this.inputOne === this.inputTwo;
  }

  editPassword() {
    console.log('editPassword() called');
    switch (this.componentType) {
      case PASSWORD_COMPONENT_TYPE.CHANGE:
        this.changePassword();
        break;
      case PASSWORD_COMPONENT_TYPE.RESET:
        this.resetPassword();
        break;
      case PASSWORD_COMPONENT_TYPE.SET:
        this.setPassword();
        break;
    }
    return false;
  }

  changePassword() {
    const model: PasswordChangeModel = {
      currentPassword: this.currentPassword,
      newPassword: this.inputOne
    };
    this.accountService.changePassword(model)
      .subscribe(res => {
        if (res) {
          console.log('change successful');
        }
      }, error => {
        console.log('error');
        this.errors = error;
      }
    );
  }

  resetPassword() {
    // Validation has been done, so we can safely construct a valid object from model
    const model: PasswordResetModel = {
      userId: this.tokenQueryModel.userId,
      passwordResetToken: this.tokenQueryModel.token,
      newPassword: this.inputOne // Doesn't matter which input value we pick; they're the same
    };

    this.accountService.resetPassword(model).subscribe(
      res => {
        if (res) {
          console.log('reset successful');
          return true;
        }
      }, error => {
        console.log('error');
        this.errors = error;
        return false;
      }
    );
  }

  setPassword() {

    if (this.passwordResetToken === null) {
      this.errors = 'Application error';
    } else {
      const model: PasswordResetModel = {
        userId: this.tokenQueryModel.userId,
        passwordResetToken: this.passwordResetToken,
        newPassword: this.inputOne
      };
      this.accountService.resetPassword(model).subscribe(
        result => {
          if (result) {
            console.log('Password reset successful?', result);
          }
        }, error => {
          this.errors = error;
          console.log('Password reset unsuccessful');
        }
      );
    }
  }

  ngOnInit() {
    const purpose = this.purpose.toUpperCase();
    console.log(purpose);
    switch (purpose) {
      case PASSWORD_COMPONENT_NAME.CHANGE:
        // this.componentName = PASSWORD_COMPONENT_NAME.CHANGE;
        this.isChangeComponent = true;
        this.componentType = PASSWORD_COMPONENT_TYPE[PASSWORD_COMPONENT_NAME.CHANGE];
        console.log('Change component');
        break;
      case PASSWORD_COMPONENT_NAME.RESET:
        // this.componentName = PASSWORD_COMPONENT_NAME.RESET;
        this.componentType = PASSWORD_COMPONENT_TYPE[PASSWORD_COMPONENT_NAME.RESET];
        console.log('Reset component');
        break;
      case PASSWORD_COMPONENT_NAME.SET:
        // this.componentName = PASSWORD_COMPONENT_NAME.SET;
        this.componentType = PASSWORD_COMPONENT_TYPE[PASSWORD_COMPONENT_NAME.SET];
        this.uriQueryService.tokenQueryModelData$.subscribe(
          token => {
            this.passwordResetToken = token.token;
          }
        );
        console.log('Set component');
        break;
      default:
        this.router.navigate(['/error']);
    }
    this.tokenQueryModel = this.uriQueryService.getTokenQueryModel(
      this.activatedRoute.snapshot.queryParams
    );
  }

}
