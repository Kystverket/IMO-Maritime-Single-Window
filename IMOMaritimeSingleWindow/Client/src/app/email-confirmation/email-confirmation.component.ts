import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/services/account.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.css']
})
export class EmailConfirmationComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams: any) => {
      const encodedUserIdParam = encodeURIComponent(queryParams.userId);
      const encodedEmailConfirmationTokenParam = encodeURIComponent(queryParams.emailConfirmationToken);
      this.accountService.getPasswordResetToken(
        encodedUserIdParam,
        encodedEmailConfirmationTokenParam
      ).subscribe(token => {
        if (token) {
          console.log({ 'token': token });
        }
      });
    });
  }

}
