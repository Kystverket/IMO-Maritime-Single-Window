import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { SsnBgComponent } from '../shared/components/ssn-bg/ssn-bg.component';
import { SsnCardComponent } from '../shared/components/ssn-card/ssn-card.component';
import { SharedModule } from '../shared/shared.module';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';
import { ErrorComponent } from './error/error.component';
import { RouterModule } from '@angular/router';
import { UriQueryService } from '../shared/services/uri-query.service';
import { PasswordComponent } from './password/password.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    NgSelectModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    PasswordComponent,
    SsnBgComponent,
    SsnCardComponent
  ],
  declarations: [
    EmailConfirmationComponent,
    ErrorComponent,
    PasswordComponent
  ],
  providers: [
    UriQueryService
  ]
})
export class AuthModule { }