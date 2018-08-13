import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { UserProperties } from '../../../constants/user-properties';
import { PortCallService } from '../../../services/port-call.service';
import { Subscription } from '../../../../../../node_modules/rxjs';

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
