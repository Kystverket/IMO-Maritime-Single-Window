import { Component, Input, OnDestroy, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UserProperties } from 'app/shared/constants/user-properties';
import { PortCallService } from 'app/shared/services/port-call.service';
import { Subscription } from 'rxjs';

@Component({
  standalone: false,
  selector: 'app-user-info-table',
  templateUrl: './user-info-table.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./user-info-table.component.css']
})
export class UserInfoTableComponent implements OnInit, OnDestroy {
  @Input() header: string;

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
