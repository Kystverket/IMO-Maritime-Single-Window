import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccountService } from '../../../../shared/services/account.service';

@Component({
  selector: 'app-account-overview',
  templateUrl: './account-overview.component.html',
  styleUrls: ['./account-overview.component.css']
})
export class AccountOverviewComponent implements OnInit, OnDestroy {
  
  private accountOverviewSubscription: Subscription;
  userDetails: any;
  userLabels: string[] = [];
  userValues: string[] = [];
  labels: string[] = [];
  values: string[] = [];
  organizationLabels: string[] = [];
  organizationValues: string[] = [];
  roleLabels: string[] = [];
  roleValues: string[] = [];
  affiliationLabels: string[] = [];
  affiliationValues: string[] = [];

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.accountOverviewSubscription = this.accountService
      .getAccountOverview()
      .subscribe(details => {
        this.userDetails = details;
        this.labels = Object.keys(details);
        this.labels.forEach(label => {
          this.values.push(details[label]);
        });
        this.filterOrganizationFields(details);
        this.filterRoleFields(details);
        this.setAffiliationFields();
        this.setUserDetails();
        this.formatLabels();
        console.log(this);
      });
  }

  ngOnDestroy(): void {
    this.accountOverviewSubscription.unsubscribe();
  }

  filterOrganizationFields(details: any) {
    this.organizationLabels = this.labels.filter(label => label.match(/organization/));
    this.organizationLabels.forEach(orgLabel => {
      this.organizationValues.push(details[orgLabel]);
    });
  }

  filterRoleFields(details: any) {
    this.roleLabels = this.labels.filter(label => label.match(/role/));
    this.roleLabels.forEach(roleLabel => this.roleValues.push(details[roleLabel]));
  }

  setAffiliationFields() {
    this.affiliationLabels = this.organizationLabels.concat(this.roleLabels);
    this.affiliationValues = this.organizationValues.concat(this.roleValues);
  }

  setUserDetails() {
    // Set difference userLabels \ affiliationLabels
    this.userLabels = this.labels
      .filter(label => !this.affiliationLabels
        .some(affiliationLabel => affiliationLabel === label));
    
    this.userValues = this.values
      .filter(value => !this.affiliationValues
        .some(affiliationValue => affiliationValue === value));
  }

  formatLabels() {
    const camel2title = (camelCase: string) => {
      return camelCase
      .replace(/([A-Z])/g, (match) => ` ${match}`)
      .replace(/^./, (match) => match.toUpperCase()); 
    }

    for (let index = 0; index < this.userLabels.length; index++) {
      const label = this.userLabels[index];
      this.userLabels[index] = camel2title(label);
    }

    for (let index = 0; index < this.organizationLabels.length; index++) {
      const label = this.organizationLabels[index];
      this.organizationLabels[index] = camel2title(label);
    }

    for (let index = 0; index < this.roleLabels.length; index++) {
      const label = this.roleLabels[index];
      this.roleLabels[index] = camel2title(label);
    }

  }

}
