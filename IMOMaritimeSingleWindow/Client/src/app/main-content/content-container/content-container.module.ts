import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'app/shared/shared.module';
import { HeaderModule } from '../header/header.module';
import { AccountModule } from './account/account.module';
import { BasisDataModule } from './basis-data/basis-data.module';
import { ContentContainerComponent } from './content-container.component';
import { PortCallModule } from './port-call/port-call.module';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    PortCallModule,
    BasisDataModule,
    SharedModule,
    AccountModule,
    HeaderModule
  ],
  declarations: [ContentContainerComponent],
  exports: [ContentContainerComponent]
})
export class ContentContainerModule {}
