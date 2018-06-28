import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  @Input() header: string;

  inputOne = '';
  inputTwo = '';
  passwordMatch = false;
  fieldsFilled = false;

  constructor() {}

  checkFill() {
    this.fieldsFilled = this.inputOne !== '' && this.inputTwo !== '';
  }

  checkPasswords() {
    this.checkFill();
    this.passwordMatch =
      !(this.inputOne === '' || this.inputTwo === '') &&
      this.inputOne === this.inputTwo;
  }

  resetPassword() {
    return false;
  }

  ngOnInit() {}
}
