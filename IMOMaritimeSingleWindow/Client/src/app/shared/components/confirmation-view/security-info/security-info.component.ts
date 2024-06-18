import { Component, Input, OnInit } from '@angular/core';
import { FalSecurityService } from 'app/shared/services/';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-security-info',
  templateUrl: './security-info.component.html',
  styleUrls: ['./security-info.component.css']
})
export class SecurityInfoComponent implements OnInit {
  @Input() portCallId: number;

  securityDataSubscription: Subscription;
  isLoading: boolean;
  securityDelivered: boolean;
  header = 'Security Details';
  public cso: any;
  public issc: any;
  public securityDetails: any;

  constructor(private securityService: FalSecurityService) {}

  ngOnInit() {
    if (this.portCallId) {
      this.isLoading = true;
      this.securityDataSubscription = this.securityService
        .getFalSecurityOverViewByPortCallId(this.portCallId)
        .finally(() => {
          this.isLoading = false;
        })
        .subscribe(res => {
          if (res != null && res.hasSecurity) {
            this.securityDelivered = true;
            this.cso = res.cso;
            this.issc = res.issc;
            this.securityDetails = res.securityDetails;
          } else {
            this.header += ' not delivered';
          }
        });
    }
  }
}
