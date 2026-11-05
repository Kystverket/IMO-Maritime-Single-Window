import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  constructor(
  ) {}

  ngOnInit() {
  }
}
