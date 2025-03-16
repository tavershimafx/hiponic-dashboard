import { Routes } from '@angular/router';
import { NoLayoutComponent } from './layouts/no-layout/no-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard/dashboard.component';

export const routes: Routes = [
    { path: "", component: NoLayoutComponent, 
        loadChildren: () => import("./layouts/no-layout/no-layout.module").then(k => k.NoLayoutModule) },
        
    { path: "dashboard", component: DashboardLayoutComponent, 
        loadChildren: () => import("./layouts/dashboard/dashboard.module").then(k => k.DashboardLayoutModule) }
];
