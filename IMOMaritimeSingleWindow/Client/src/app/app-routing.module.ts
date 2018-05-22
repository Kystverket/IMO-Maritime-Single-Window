import { NgModule, Directive }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }       from './login/login.component';
import { MainContentComponent } from './main-content/main-content.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { LoginAuthGuard } from './auth/guards/login-auth.guard';
import { ErrorGuard } from './auth/guards/error.guard';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent,
    canActivate: [LoginAuthGuard]
  },
  {
    path: '', component: MainContentComponent,
    canActivate: [AuthGuard]
  },
  {
    // TODO: Make ErrorComponent
    path: '**', component: MainContentComponent,
    canActivate: [ErrorGuard]
  },
  {
    path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule'
  }
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(
      routes, 
//      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
export const routedComponents = [MainContentComponent, LoginComponent];