import { NgModule } from '@angular/core';
import { DashboardLayoutComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { IndexComponent } from '../../pages/dashboard/index/index.component';

const components = [
  DashboardLayoutComponent,
  IndexComponent
]

@NgModule({
  declarations: [ ...components],
  imports: [RouterModule, DashboardRoutingModule],
  exports: []
})
export class DashboardLayoutModule {
  
}
