import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainContentComponent } from './main-content/main-content.component';
import { EmailConfirmationComponent } from './auth/email-confirmation/email-confirmation.component';
import { EmailConfirmationGuard } from './auth/guards/email-confirmation.guard';
import { PasswordResetComponent } from './auth/password-reset/password-reset.component';
import { PasswordResetGuard } from './auth/guards/password-reset.guard';

import { SelectivePreloadingStrategy } from 'selective-preloading-strategy';
import { ErrorComponent } from './error/error.component';
import { LoginAuthGuard } from './guards/login-auth.guard';
import { AuthGuard } from './guards/auth.guard';
import { ErrorGuard } from './guards/error.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: 'app/auth/auth.module#AuthModule'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginAuthGuard]
  },
  /* {
    path: 'ConfirmEmail',
    component: EmailConfirmationComponent,
    canActivate: [EmailConfirmationGuard]
  },
  {
    path: 'ResetPassword',
    component: PasswordResetComponent,
    canActivate: [PasswordResetGuard]
  }, */
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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // enableTracing: true, // <-- debugging purposes only
      preloadingStrategy: SelectivePreloadingStrategy
    })
  ],
  exports: [RouterModule],
  providers: [SelectivePreloadingStrategy]
})
export class AppRoutingModule {}
export const routedComponents = [MainContentComponent, LoginComponent];
