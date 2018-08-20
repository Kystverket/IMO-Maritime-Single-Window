import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../../shared/shared.module';
import { AccountOverviewComponent } from './account-overview/account-overview.component';

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
