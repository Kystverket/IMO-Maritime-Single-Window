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
    const tokenQueryModel = this.uriQueryService.getTokenQueryModel(this.activatedRoute.snapshot.queryParams);
    // console.log(tokenQueryModel);

    this.accountService.confirmEmail(tokenQueryModel).subscribe(result => {
        // If email confirmation token was valid
        if (result) {
          // Update html to reflect email successfully confirmed
          console.log('email confirmation was successful');
          // Get password reset token
          this.accountService.getPasswordResetToken(tokenQueryModel.userId)
            .subscribe(passwordResetToken => {
              if (passwordResetToken) {
                console.log({passwordResetToken: passwordResetToken});
                // Redirect? Or present link to navigate?
                // Redirect:
                // Navigate to reset password and supply token as query parameter in URI
                // this.router.navigate(['ResetPassword'], { queryParams: userId, token});
                // Present link? ...
              }
            });
        }
      }, error => {
        // Update html to reflect email confirmation was unsuccessful
        console.log('email confirmation was unsuccessful');
      }
    );
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
