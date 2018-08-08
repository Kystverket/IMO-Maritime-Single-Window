import { Component, OnInit } from '@angular/core';
import { PasswordService } from '../password.service';
@Component({
  selector: 'app-auth-home',
  templateUrl: './auth-home.component.html',
  styleUrls: ['./auth-home.component.css']
})
export class AuthHomeComponent implements OnInit {

  constructor(
    private passwordService: PasswordService
  ) { }

  ngOnInit() {
  }

  setResetRequested() {
    this.passwordService.setResetRequested(true);
  }

}
