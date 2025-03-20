import { NgModule } from '@angular/core';
import { DashboardLayoutComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { IndexComponent } from '../../pages/dashboard/index/index.component';
import DirectivesModule from '../../directives/directives.module';
import ToggleComponent from "../../components/components.module";

const components = [
  DashboardLayoutComponent,
  IndexComponent
]

@NgModule({
  declarations: [ ...components],
  imports: [RouterModule,
    DashboardRoutingModule, DirectivesModule, ToggleComponent],
  exports: []
})
export class DashboardLayoutModule {
  
}
