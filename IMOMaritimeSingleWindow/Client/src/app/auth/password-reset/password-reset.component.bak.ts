// import { Component, OnInit, Input } from "@angular/core";
// import { PasswordService } from "../password.service";
// import { AccountService } from "../../shared/services/account.service";
// import { PasswordResetModel } from "../../shared/models/password-reset-model";
// import { ActivatedRoute } from "@angular/router";
// import { UriQueryService } from "../../shared/services/uri-query.service";
// import { map, take } from "rxjs/operators";
// import { single } from "rxjs/operator/single";

// @Component({
//   selector: "app-password-reset",
//   templateUrl: "./password-reset.component.html",
//   styleUrls: ['./password-reset.component.css']
// })
// export class PasswordResetComponent implements OnInit {
//   @Input() header: string;

//   inputOne = '';
//   inputTwo = '';
//   passwordMatch = false;
//   fieldsFilled = false;

//   error: string;

//   constructor(
//     private accountService: AccountService,
//     private passwordService: PasswordService,
//     private uriQueryService: UriQueryService,
//     private activatedRoute: ActivatedRoute
//   ) {}

//   checkFill() {
//     this.fieldsFilled = this.inputOne !== '' && this.inputTwo !== '';
//   }

//   checkPasswords() {
//     this.checkFill();
//     this.passwordMatch =
//       !(this.inputOne === '' || this.inputTwo === '') &&
//       this.inputOne === this.inputTwo;
//   }

//   resetPassword() {
//     // Validation has been done, so we can safely construct a valid object from model
//     const tokenQueryModel = this.uriQueryService.getTokenQueryModel(
//       this.activatedRoute.snapshot.queryParams
//     );
//     const model: PasswordResetModel = {
//       userId: tokenQueryModel.userId,
//       passwordResetToken: tokenQueryModel.token,
//       newPassword: this.inputOne // Doesn't matter which input value we pick; they're the same
//     };

//     this.accountService.resetPassword(model).subscribe(
//       res => {
//         if (res) {
//           console.log('reset successful');
//         }
//       },
//       error => {
//         console.log('error');
//         this.error = error;
//       }
//     );
//   }

//   ngOnInit() {
//     console.log('password reset component');
//     this.passwordService.setResetRequested(false);
//   }
// }
