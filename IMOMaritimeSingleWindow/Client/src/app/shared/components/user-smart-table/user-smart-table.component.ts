import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AccountService } from 'app/shared/services/account.service';
import { LocalDataSource } from 'ng2-smart-table';
import { Subscription } from 'rxjs';
import { UserButtonRowComponent } from './user-button-row/user-button-row.component';

@Component({
  selector: 'app-user-smart-table',
  templateUrl: './user-smart-table.component.html',
  styleUrls: ['./user-smart-table.component.css']
})
export class UserSmartTableComponent implements OnInit, OnDestroy {

  tableData = [];
  dataSource: LocalDataSource = new LocalDataSource();
  tableSettings = {
    mode: 'external',
    actions: false,
    attr: {
      class: 'table table-bordered'
    },
    noDataMessage: 'There are no users in this list.',

    columns: {
      fullname: {
        title: 'Full Name',
        type: 'html'
      },
      organization: {
        title: 'Organization',
        type: 'html'
      },
      role: {
        title: 'Role',
        type: 'html'
      },
      email: {
        title: 'Email',
        type: 'html'
      },
      isActive: {
        title: 'Account Status',
        type: 'html'
      },
      actions: {
        title: 'Actions',
        type: 'custom',
        filter: false,
        sort: false,
        renderComponent: UserButtonRowComponent
      }
    }
  };

  userSearchDataSubscription: Subscription;

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.userSearchDataSubscription = this.accountService.userSearchData$.subscribe(data => {
      if (data) {
        if (data.length !== 0) {
          const rowList = [];
          data.forEach(user => {
            const row = this.dataRow(user);
            rowList.push(row);
          });
          this.tableData = rowList;
        }
      }
      this.dataSource.load(this.tableData);
    });
  }

  ngOnDestroy() {
    this.userSearchDataSubscription.unsubscribe();
  }

  dataRow(user) {
    const row = {
      userModel: user,
      fullname: ((user.givenName) ? user.givenName : '') + ' ' + ((user.surname) ? user.surname : ''),
      organization: (user.organization) ? user.organization : 'N/A',
      role: user.role,
      email: user.email,
      isActive: (user.isActive) ? 'Active' : 'Deactivated',
      actions: 'btn'
    };
    return row;
  }

}
