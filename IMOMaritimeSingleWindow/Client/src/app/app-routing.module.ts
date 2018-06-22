import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { ErrorGuard } from './auth/guards/error.guard';
import { LoginAuthGuard } from './auth/guards/login-auth.guard';
import { LoginComponent } from './login/login.component';
import { MainContentComponent } from './main-content/main-content.component';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';
import { EmailConfirmationGuard } from './auth/guards/email-confirmation.guard';

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
    path: '',
    component: MainContentComponent,
    canActivate: [AuthGuard]
  },
  {
    // TODO: Make ErrorComponent
    path: '**',
    component: MainContentComponent,
    canActivate: [ErrorGuard]
  }
  // ,
  // {
  //   path: 'ResetPassword'
  // }
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
