import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../../shared/shared.module';
import { AccountOverviewComponent } from './account-overview/account-overview.component';
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    NgSelectModule,
    SharedModule,
  ],
  declarations: [
    AccountOverviewComponent
  ],
  exports: [
    AccountOverviewComponent
  ]
})
export class AccountModule { }
