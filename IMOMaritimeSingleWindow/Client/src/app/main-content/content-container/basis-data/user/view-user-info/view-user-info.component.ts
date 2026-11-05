import { Component, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { AccountService, ContentService } from 'app/shared/services/';

@Component({
  standalone: false,
  selector: 'app-view-user-info',
  templateUrl: './view-user-info.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./view-user-info.component.css']
})
export class ViewUserInfoComponent implements OnInit, OnDestroy {

  constructor(
    private accountService: AccountService,
    private contentService: ContentService
  ) { }

  ngOnInit() { }

  onUserSearchResult(userSearchResult) {
    this.accountService.setUserSearchData(userSearchResult);
  }

  registerNewUser() {
    this.accountService.setUserData(null);
    this.contentService.setContent(CONTENT_NAMES.REGISTER_USER);
  }

  ngOnDestroy() {
    this.accountService.setUserSearchData([]);
  }
}
