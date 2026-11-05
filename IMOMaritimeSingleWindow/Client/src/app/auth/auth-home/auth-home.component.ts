import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PasswordService } from '../password.service';
@Component({
  standalone: false,
  selector: 'app-auth-home',
  templateUrl: './auth-home.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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
