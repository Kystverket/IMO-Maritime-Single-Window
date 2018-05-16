import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { BasisDataModule } from './basis-data/basis-data.module';
import { ContentContainerComponent } from './content-container.component';
import { PortCallModule } from './port-call/port-call.module';
import { ViewOrganizationInfoComponent } from './basis-data/organization/view-organization-info/view-organization-info.component';

@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    PortCallModule,
    BasisDataModule,
    SharedModule
  ],
  declarations: [
    ContentContainerComponent
  ],
  exports: [ContentContainerComponent]
})
export class ContentContainerModule { }
