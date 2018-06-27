import { Component, OnInit, Input } from '@angular/core';
import { TokenQueryModel } from '../../shared/models/token-query-model';
import { AccountService } from '../../shared/services/account.service';
import { UriQueryService } from '../../shared/services/uri-query.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PasswordResetModel } from '../../shared/models/password-reset-model';
import { PasswordChangeModel } from '../../shared/models/password-change-model';

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
  isChangeComponent: boolean;

  error: string;

  tokenQueryModel: TokenQueryModel;

  constructor(
    private accountService: AccountService,
    private uriQueryService: UriQueryService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  checkFill() {
    if (this.isChangeComponent) {
      this.fieldsFilled = this.inputOne !== '' && this.inputTwo !== '' && this.currentPassword !== '';
    } else {
      this.fieldsFilled = this.inputOne !== '' && this.inputTwo !== '';
    }
  }

  checkPasswords() {
    this.checkFill();
    this.passwordMatch =
      !(this.inputOne === '' || this.inputTwo === '') &&
      this.inputOne === this.inputTwo;
  }

  editPassword() {
    console.log('editPassword() called');
    if (this.isChangeComponent) {
      this.changePassword();
    } else {
      this.resetPassword();
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
        this.error = error;
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
        }
      }, error => {
        console.log('error');
        this.error = error;
      }
    );
  }

  ngOnInit() {
    switch (this.purpose) {
      case 'Reset':
        this.isChangeComponent = false;
        console.log('Reset component');
        break;
      case 'Set':
        this.isChangeComponent = false;
        console.log('Set component');
        break;
      case 'Change':
        this.isChangeComponent = true;
        console.log('Change component');
        break;
      default:
        this.router.navigate(['/error']);
    }
    this.tokenQueryModel = this.uriQueryService.getTokenQueryModel(
      this.activatedRoute.snapshot.queryParams
    );
  }

}
