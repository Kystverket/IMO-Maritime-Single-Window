import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AccountService } from 'app/shared/services/account.service';

@Component({
  standalone: false,
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  constructor(private accountService: AccountService) {}

  ngOnInit() {
    let userClaims;
    if ((userClaims = localStorage.getItem('user_claims'))) {
      this.accountService.setUserClaims(JSON.parse(userClaims));
    }
  }
}
