import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FalSecurityModel } from 'app/shared/models/fal-security-model';
import { FalSecurityService } from 'app/shared/services/fal-security.service';
import { SecurityLevelModel } from 'app/shared/models/security-level-model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-security-details',
  templateUrl: './security-details.component.html',
  styleUrls: ['./security-details.component.css'],
  providers: [FalSecurityService]
})
export class SecurityDetailsComponent implements OnInit, OnDestroy {
  @Input() securityModel: FalSecurityModel;
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

  touchData() {
    this.securityService.setPristineData(false);
    this.validateData();
  }

  private validateData() {
    this.securityService.setValidSecurityDetailsData(this.dataIsValid());
  }

  private dataIsValid(): boolean {
    return this.securityModel != null
      && this.securityModel.securityLevelId != null;
  }

}
