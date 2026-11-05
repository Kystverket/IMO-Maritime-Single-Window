import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
