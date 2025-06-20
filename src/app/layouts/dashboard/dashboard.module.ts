import { NgModule } from '@angular/core';
import { DashboardLayoutComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { IndexComponent } from '@pages/dashboard/index/index.component';
import DirectivesModule from '@directives/directives.module';
import { CommonModule } from '@angular/common';
import ComponentsModule from '@components/components.module';

import { ModalsModule } from '@modals/modals.module';

const components = [
  DashboardLayoutComponent,
  IndexComponent
]

@NgModule({
  declarations: [ ...components],
  imports: [RouterModule,
    DashboardRoutingModule, 
    DirectivesModule, 
    CommonModule,
    ComponentsModule,
    ModalsModule,
    ],
  exports: [],
  providers: [],
})
export class DashboardLayoutModule {
  
}
