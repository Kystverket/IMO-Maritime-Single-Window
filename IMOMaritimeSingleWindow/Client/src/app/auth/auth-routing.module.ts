import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { PasswordResetGuard } from './guards/password-reset.guard';
import { AuthHomeComponent } from './auth-home/auth-home.component';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';
import { EmailConfirmationGuard } from './guards/email-confirmation.guard';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guards/login.guard';

const authRoutes: Routes = [
  {
    path: '',   /*  /auth   */
    component: AuthHomeComponent,
    children: [
        {
            path: 'ResetPassword',
            component: PasswordResetComponent,
            canActivate: [PasswordResetGuard]
          },
          {
            path: 'ChangePassword',
            component: PasswordChangeComponent
          },
          {
            path: 'ConfirmEmail',
            component: EmailConfirmationComponent,
            canActivate: [EmailConfirmationGuard]
          },
          {
              path: 'login',
              component: LoginComponent,
              canActivate: [LoginGuard]
          }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
