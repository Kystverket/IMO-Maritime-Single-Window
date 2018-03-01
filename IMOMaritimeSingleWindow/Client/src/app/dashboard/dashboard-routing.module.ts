import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { Route } from '@angular/compiler/src/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';

const dashboardRoutes: Routes = [
    {
        path: 'dashboard', component: DashboardComponent 
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(dashboardRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardRoutingModule {}