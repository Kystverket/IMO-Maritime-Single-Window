import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { HeaderModule } from '../main-content/header/header.module';
import { SsnBgComponent } from '../shared/components/ssn-bg/ssn-bg.component';
import { SsnCardComponent } from '../shared/components/ssn-card/ssn-card.component';
import { UriQueryService } from '../shared/services/uri-query.service';
import { SharedModule } from '../shared/shared.module';
import { AuthHomeComponent } from './auth-home/auth-home.component';
import { AuthRoutingModule } from './auth-routing.module';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';
import { AuthHomeGuard } from './guards/auth-home.guard';
import { EmailConfirmationGuard } from './guards/email-confirmation.guard';
import { LoginGuard } from './guards/login.guard';
import { PasswordResetGuard } from './guards/password-reset.guard';
import { LoginComponent } from './login/login.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { PasswordForgottenComponent } from './password-forgotten/password-forgotten.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { PasswordService } from './password.service';
import { PasswordComponent } from './password/password.component';

@NgModule({
  imports: [
    AuthRoutingModule,
    CommonModule,
    FormsModule,
    NgbModule,
    NgSelectModule,
    RouterModule,
    SharedModule,
    HeaderModule
  ],
  exports: [
    PasswordComponent,
    SsnBgComponent,
    SsnCardComponent
  ],
  declarations: [
    AuthHomeComponent,
    EmailConfirmationComponent,
    LoginComponent,
    PasswordComponent,
    PasswordChangeComponent,
    PasswordResetComponent,
    PasswordForgottenComponent,
  ],
  providers: [
    // Guards
    AuthHomeGuard,
    EmailConfirmationGuard,
    LoginGuard,
    PasswordResetGuard,
    // Services
    PasswordService,
    UriQueryService,
  ]
})
export class AuthModule { }
