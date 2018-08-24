import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';

import { SelectivePreloadingStrategy } from 'selective-preloading-strategy';
import { ErrorComponent } from './error/error.component';
import { ErrorGuard } from './guards/error.guard';
import { RootGuard } from './guards/root.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: 'app/auth/auth.module#AuthModule'
  },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  //   canActivate: [LoginAuthGuard]
  // },
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
    canActivate: [RootGuard],
    canLoad: [RootGuard]
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
export const routedComponents = [MainContentComponent];
