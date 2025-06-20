import { NgModule } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { IndexComponent } from '@pages/dashboard/index/index.component';

const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "tasks", loadChildren: () => import("@pages/dashboard/tasks/tasks.module").then(k => k.TasksModule) },
  { path: "ecommerce", loadChildren: () => import("@pages/dashboard/ecommerce/ecommerce.module").then(k => k.EcommerceModule) },
  { path: "uba", loadChildren: () => import("@pages/dashboard/uba/uba.module").then(k => k.UbaModule) }
]

@NgModule({
  imports: [],
  exports: [],
  providers: [provideRouter(routes)]
})
export class DashboardRoutingModule {
  
}
