import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { UserProperties } from 'app/shared/constants/user-properties';
import { PortCallService } from 'app/shared/services/port-call.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user-info-table',
  templateUrl: './user-info-table.component.html',
  styleUrls: ['./user-info-table.component.css']
})
export class UserInfoTableComponent implements OnInit, OnDestroy {
  createdByUserData: any;
  createdByUserProperties = new UserProperties().getPropertyList();
  createdByUserDataSubscription: Subscription;

  constructor(
    private portCallService: PortCallService
  ) { }

  ngOnInit() {
    this.createdByUserDataSubscription = this.portCallService.createdByUserData$.subscribe(
      data => {
        if (data) {
          this.createdByUserData = data;
          UserProperties.setUserData(this.createdByUserProperties, this.createdByUserData);
        }
      }
    );
  }

  ngOnDestroy() {
    this.createdByUserDataSubscription.unsubscribe();
  }

}
