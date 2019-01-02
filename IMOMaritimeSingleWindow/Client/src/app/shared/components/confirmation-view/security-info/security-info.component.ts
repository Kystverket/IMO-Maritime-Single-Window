import { Component, Input, OnInit } from '@angular/core';
import { FalSecurityService } from 'app/shared/services/';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-security-info',
  templateUrl: './security-info.component.html',
  styleUrls: ['./security-info.component.css']
})
export class SecurityInfoComponent implements OnInit {

  @Input() portCallId: number;

  securityDataSubscription: Subscription;
  public cso: any = [];
  public issc: any = [];
  public securityDetails: any = [];

  // Smart table
  isscSettings = {
    mode: 'external',
    actions: false,
    attr: {
      class: 'table table-bordered'
    },
    noDataMessage: 'There is no ISSC reported.',
    columns: {
      certificateNumber: {
        title: 'Certificate Number',
        filter: false,
        sort: false
      },
      expiryDate: {
        title: 'Expiry Date',
        filter: false,
        sort: false
      },
      issuerType: {
        title: 'Issuer Type',
        filter: false,
        sort: false
      },
      issuedBy: {
        title: 'Issued By Country',
        filter: false,
        sort: false
      }
    }
  };

  csoSettings = {
    mode: 'external',
    actions: false,
    attr: {
      class: 'table table-bordered'
    },
    noDataMessage: 'There is no CSO information reported.',
    columns: {
      fullName: {
        title: 'Full Name',
        filter: false,
        sort: false
      },
      phoneNumber: {
        title: 'Phone Number',
        filter: false,
        sort: false
      },
      email: {
        title: 'Email',
        filter: false,
        sort: false
      }
    }
  };

  securityDetailsSettings = {
    mode: 'external',
    actions: false,
    attr: {
      class: 'table table-bordered'
    },
    noDataMessage: 'There are no security details reported.',
    columns: {
      currentSecurityLevel: {
        title: 'Current Security Level',
        filter: false,
        sort: false
      }, validSSP: {
        title: 'Valid Ship Security Plan (SSP) on board',
        filter: false,
        sort: false
      }
    }
  };

  constructor(
    private securityService: FalSecurityService
  ) { }

  ngOnInit() {
    if (this.portCallId) {
      this.securityDataSubscription = this.securityService.getFalSecurityOverViewByPortCallId(this.portCallId)
        .finally(() => {

        })
        .subscribe(res => {
          if (res != null) {
            this.cso = res.cso;
            this.issc = res.issc;
            this.securityDetails = res.securityDetails;
          }
        });
    }
  }

}
