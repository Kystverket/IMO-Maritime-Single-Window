import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { ErrorGuard } from './auth/guards/error.guard';
import { LoginAuthGuard } from './auth/guards/login-auth.guard';
import { LoginComponent } from './login/login.component';
import { MainContentComponent } from './main-content/main-content.component';
import { EmailConfirmationComponent } from './auth/email-confirmation/email-confirmation.component';
import { EmailConfirmationGuard } from './auth/guards/email-confirmation.guard';
import { PasswordResetComponent } from './auth/password-reset/password-reset.component';
import { PasswordResetGuard } from './auth/guards/password-reset.guard';
import { ErrorComponent } from './auth/error/error.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginAuthGuard]
  },
  {
    path: 'ConfirmEmail',
    component: EmailConfirmationComponent,
    canActivate: [EmailConfirmationGuard]
  },
  {
    path: 'ResetPassword',
    component: PasswordResetComponent,
    canActivate: [PasswordResetGuard]
  },
  {
    path: '',
    component: MainContentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    // TODO: Make ErrorComponent
    path: '**',
    component: ErrorComponent,
    canActivate: [ErrorGuard]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
      //      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routedComponents = [MainContentComponent, LoginComponent];
