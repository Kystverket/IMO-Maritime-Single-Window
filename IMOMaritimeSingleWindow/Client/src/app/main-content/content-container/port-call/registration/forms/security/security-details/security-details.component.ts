import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FalSecurityModel, SecurityLevelModel } from 'app/shared/models/';
import { FalSecurityService } from 'app/shared/services/fal-security.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-security-details',
  templateUrl: './security-details.component.html',
  styleUrls: ['./security-details.component.css']
})
export class SecurityDetailsComponent implements OnInit, OnDestroy {
  @Input() formModel: FalSecurityModel;
  securityLevelList: SecurityLevelModel[];

  // Subscriptions
  getSecurityLevelListSubscription: Subscription;

  constructor(
    private securityService: FalSecurityService
  ) { }

  ngOnInit() {
    this.validateData();
    this.getSecurityLevelListSubscription = this.securityService.getSecurityLevelList().subscribe(
      data => {
        this.securityLevelList = data;
      }, error => {
        console.error(error);
      }
    );
  }

  ngOnDestroy() {
    this.getSecurityLevelListSubscription.unsubscribe();
  }

  /** Called whenever a change is made to the formModel in the form. */
  touchData() {
    this.securityService.setPristineData(false);
    this.validateData();
  }

  /** Checks that information required for saving is present. */
  private validateData() {
    this.securityService.setValidSecurityDetailsData(this.dataIsValid());
  }

  private dataIsValid(): boolean {
    return this.formModel != null
      && this.formModel.securityLevelId != null;
  }

}
