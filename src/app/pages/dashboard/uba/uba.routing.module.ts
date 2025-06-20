import { NgModule } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { UsersComponent } from './users/users.component';
import { AuditComponent } from './audit/audit.component';
import { RolesComponent } from './roles/roles.component';
import { ApprovalsComponent } from './approvals/approvals.component';

const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "transactions", component: TransactionsComponent },
  { path: "users", component: UsersComponent },
  { path: "audit", component: AuditComponent },
  { path: "roles", component: RolesComponent },
  { path: "approvals", component: ApprovalsComponent },
]

@NgModule({
  imports: [],
  exports: [],
  providers: [provideRouter(routes)]
})
export class UbaRoutingModule {
  
}
