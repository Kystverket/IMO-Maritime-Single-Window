import { Component, OnInit, OnDestroy } from '@angular/core';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { PortCallClaims } from 'app/shared/constants/port-call-claims';
import { AccountService } from 'app/shared/services/account.service';
import { ContentService } from 'app/shared/services/content.service';
import { PortCallService } from 'app/shared/services/port-call.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-port-call',
  templateUrl: './port-call.component.html',
  styleUrls: ['./port-call.component.css']
})
export class PortCallComponent implements OnInit, OnDestroy {
  selectedComponent: 'Passenger List';
  permissions = PortCallClaims.portCallPermissions;

  userClaimsDataSubscription: Subscription;

  constructor(
    private accountService: AccountService,
    private contentService: ContentService,
    private portCallService: PortCallService
  ) {}

  ngOnInit() {
    this.userClaimsDataSubscription = this.accountService.userClaimsData$.subscribe(userClaims => {
      if (userClaims) {
        const userClaimsTypePortCall = userClaims.filter(
          claim => claim.type === PortCallClaims.TYPE
        );
        const keys = Object.keys(this.permissions);
        keys.forEach(key => {
          this.permissions[key] = userClaimsTypePortCall.some(
            claim => claim.value.toUpperCase() === key.toString().toUpperCase()
          );
        });
      }
    });
  }

  ngOnDestroy() {
    this.userClaimsDataSubscription.unsubscribe();
  }

  selectRegister() {
    this.portCallService.wipeServiceData();
    this.contentService.setContent(CONTENT_NAMES.REGISTER_PORT_CALL);
  }
}
