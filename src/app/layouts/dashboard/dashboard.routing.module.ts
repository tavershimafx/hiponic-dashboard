import { NgModule } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { IndexComponent } from '../../pages/dashboard/index/index.component';

const routes: Routes = [
  { path: "", component: IndexComponent }
]

@NgModule({
  imports: [],
  exports: [],
  providers: [provideRouter(routes)]
})
export class DashboardRoutingModule {
  
}
