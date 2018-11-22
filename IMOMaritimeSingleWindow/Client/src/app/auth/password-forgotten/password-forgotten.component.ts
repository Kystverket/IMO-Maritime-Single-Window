import { Component, Input, OnInit, Output } from '@angular/core';
import { FeedBack } from '../../shared/models/feedback';
import { AccountService } from '../../shared/services/account.service';

@Component({
  selector: 'app-password-forgotten',
  templateUrl: './password-forgotten.component.html',
  styleUrls: ['./password-forgotten.component.css']
})
export class PasswordForgottenComponent extends FeedBack
  implements OnInit {
  email: string;

  constructor(private accountService: AccountService) {
    super();
  }

  ngOnInit() {}

  requestPasswordReset() {
    this.accountService.requestPasswordReset(this.email).subscribe(
      res => {
        const msg =
          'Please check your email for instruction for how to reset your password.';
        this.reportSuccess(msg);
      },
      error => {
        const msg =
          'An error occurred while trying to request a password reset';
        this.reportError(error, msg);
      }
    );
  }
}
