import { Component, OnInit } from '@angular/core';
import { CONTENT_NAMES } from 'app/shared/constants/content-names';
import { PortCallClaims } from 'app/shared/constants/port-call-claims';
import { AccountService } from 'app/shared/services/account.service';
import { ContentService } from 'app/shared/services/content.service';
import { PortCallService } from 'app/shared/services/port-call.service';
import { PortCallOverviewService } from 'app/shared/services/port-call-overview.service';

@Component({
  selector: 'app-port-call',
  templateUrl: './port-call.component.html',
  styleUrls: ['./port-call.component.css']
})
export class PortCallComponent implements OnInit {
  selectedComponent: string;
  permissions = PortCallClaims.portCallPermissions;
  constructor(
    private accountService: AccountService,
    private contentService: ContentService,
    private portCallService: PortCallService
  ) {}

  ngOnInit() {
    this.accountService.userClaimsData$.subscribe(userClaims => {
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

  selectRegister() {
    this.portCallService.wipeServiceData();
    this.contentService.setContent(CONTENT_NAMES.REGISTER_PORT_CALL_DRAFT);
  }
}
