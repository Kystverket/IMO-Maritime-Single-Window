import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../shared/services/content.service';
import { PortCallService } from '../../../shared/services/port-call.service';
import { PortCallOverviewModel } from '../../../shared/models/port-call-overview-model';
import { AccountService } from '../../../shared/services/account.service';
import { PortCallClaims } from '../../../shared/constants/port-call-claims';

@Component({
  selector: 'app-port-call',
  templateUrl: './port-call.component.html',
  styleUrls: ['./port-call.component.css'],
})
export class PortCallComponent implements OnInit {

  selectedComponent: string;
  permissions = PortCallClaims.portCallPermissions;
  constructor(private accountService: AccountService, private contentService: ContentService, private portCallService: PortCallService) { }

  ngOnInit() {
    this.accountService.userClaimsData$.subscribe(
      userClaims => {
        if (userClaims) {
          let userClaimsTypePortCall = userClaims.filter(claim => claim.type == PortCallClaims.TYPE);
          var keys = Object.keys(this.permissions);
          keys.forEach(key => {
            this.permissions[key] = (userClaimsTypePortCall.some(claim => claim.value.toUpperCase() == key.toString().toUpperCase()));
          })
          // this.permissions.register = userClaimsTypePortCall.some(pcClaim => pcClaim.value == PortCallClaims.REGISTER);
        }
      }
    );
  }

  selectRegister() {
    this.portCallService.wipeServiceData();
    this.contentService.setContent('Register New Port Call');
  }

}
