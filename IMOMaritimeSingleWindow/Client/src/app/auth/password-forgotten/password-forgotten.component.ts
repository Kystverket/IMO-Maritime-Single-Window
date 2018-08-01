import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../shared/services/account.service';

@Component({
  selector: 'app-password-forgotten',
  templateUrl: './password-forgotten.component.html',
  styleUrls: ['./password-forgotten.component.css']
})
export class PasswordForgottenComponent implements OnInit {

  email: string;

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit() {
  }

  requestPasswordReset() {
    this.accountService.requestPasswordReset(this.email)
    .subscribe(res => {
      if (res) {
        console.log(res);
      }
    });
  }

}
