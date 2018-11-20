import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { AccountService, ContentService } from 'app/shared/services/';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'app-user-button-row',
  templateUrl: './user-button-row.component.html',
  styleUrls: ['./user-button-row.component.css']
})
export class UserButtonRowComponent implements ViewCell, OnInit {

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() edit: EventEmitter<any> = new EventEmitter();

  constructor(
    private accountService: AccountService,
    private contentService: ContentService
  ) { }

  ngOnInit() { }

  onEditClick() {
    this.setContent(CONTENT_NAMES.REGISTER_USER);
  }

  private setContent(content: string) {
    this.setUser(content);
  }

  setUser(content) {
    this.contentService.setLoadingScreen(true, 'ship.gif', 'Loading');
    this.accountService.getUserByEmail(this.rowData.userModel.email).subscribe(data => {
      if (data) {
        this.accountService.setUserData(data);
        this.contentService.setContent(content);
      }
    });
  }

}
