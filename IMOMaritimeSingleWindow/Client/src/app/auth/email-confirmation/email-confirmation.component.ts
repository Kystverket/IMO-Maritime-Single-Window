import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from '../../shared/services/account.service';
import { TokenQueryModel } from '../../shared/models/token-query-model';
import { UriQueryService } from '../../shared/services/uri-query.service';

@Component({
  selector: 'app-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.css']
})
export class EmailConfirmationComponent implements OnInit {

  secondsRemaining = 10;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private accountService: AccountService,
    private uriQueryService: UriQueryService
  ) { }

  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.queryParams);
    // console.log(this.getTokenQueryModel());
    const tokenQueryModel = this.uriQueryService.getTokenQueryModel(this.activatedRoute.snapshot.queryParams);
    console.log(tokenQueryModel);
    const queryModel = this.getTokenQueryModel();
    // Get password reset token
    // -----
    // this.accountService.getPasswordResetToken()

    // Navigate to reset password and supply token as query parameter in URI
    // this.router.navigate(['ResetPassword'], { queryParams: userId, token});

    /* this.activatedRoute.queryParams.subscribe((queryParams: any) => {
      const encodedUserIdParam = encodeURIComponent(queryParams.userId);
      const encodedEmailConfirmationTokenParam = encodeURIComponent(queryParams.token);
      // // Future: Accept TokenQueryModel in getPasswordResetToken
      // const tokenQueryModel = new TokenQueryModel(queryParams.userId, queryParams.token);
      // this.accountService.getPasswordResetToken(tokenQueryModel);
      this.accountService.getPasswordResetToken(encodedUserIdParam, encodedEmailConfirmationTokenParam)
      .subscribe(passwordResetToken => {
        if (passwordResetToken) {
          const result = new TokenQueryModel(queryParams.userId, passwordResetToken);
        }
      });
    }); */
  }

  getTokenQueryModel(): TokenQueryModel {
    const queryParams = this.activatedRoute.snapshot.queryParams;
    return new TokenQueryModel(queryParams.userId, queryParams.token);
  }

  startRedirect(queryModel: TokenQueryModel) {
    const intervalId = setInterval((activatedRoute: ActivatedRoute) => {
      if (this.secondsRemaining === 0) {
        clearInterval(intervalId);
        this.router.navigate(['/ResetPassword'], {
          queryParams: {
            userId: queryModel.userId,
            token: queryModel.token
          }
        });
      } else {
        this.secondsRemaining--;
      }
    }, 1000);

    /* activatedRoute.queryParamMap
          .map((params: Params) => params.params)
          .subscribe((params) => {
            this.router.navigate(['/ResetPassword'], {
              queryParams: {
                userId: params.userId,
                token: params.token
              }
            }
            );
            console.log(params);
          }
        ); */

  }

}

// interface TokenQueryModel {
//   userId: string;
//   token: string;
// }
