import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UbaRoutingModule } from './uba.routing.module';
import { IndexComponent } from './index/index.component';
import DirectivesModule from '@directives/directives.module';
import { CommonModule } from '@angular/common';
import ComponentsModule from '@components/components.module';
// import {provideNativeDateAdapter} from '@angular/material/core';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatCardModule} from '@angular/material/card';
import PipesModule from '@pipes/pipes.module';
import { TransactionsComponent } from './transactions/transactions.component';
import { UsersComponent } from './users/users.component';
import { AuditComponent } from './audit/audit.component';
import { RolesComponent } from './roles/roles.component';
import { FormsModule } from '@angular/forms';
import { ApprovalsComponent } from './approvals/approvals.component';

const components = [
  IndexComponent,
  TransactionsComponent,
  UsersComponent,
  AuditComponent,
  RolesComponent,
  ApprovalsComponent
]

@NgModule({
  declarations: [ ...components],
  imports: [RouterModule,
    UbaRoutingModule, 
    DirectivesModule,
    PipesModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    //MatDatepickerModule, MatCardModule
  ],
  exports: [],
  providers: []//[provideNativeDateAdapter()],
})
export class UbaModule {
  
}
