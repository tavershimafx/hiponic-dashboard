import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import ComponentsModule from '@components/components.module';
import { NewTaskModal } from './new-task/new-task.component';
import { NewUserModal } from './new-user/new-user.component';
import { UserSearchModal } from './user-search/user-search.component';
import { TransactionSearchModal } from './transaction-search/transaction-search.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FormsModule } from '@angular/forms';
import { ApprovalSearchModal } from './approval-search/approval-search.component';
import { AuditDetailsModal } from './audit-details/audit-details.component';
import { RoleDetailsModal } from './role-details/role-details.component';
import { NewRoleModal } from './new-role/new-role.component';
import { AuditSearchModal } from './audit-search/audit-search.component';


const components = [
  NewTaskModal,
  NewUserModal,
  UserSearchModal,
  TransactionSearchModal,
  ApprovalSearchModal,
  AuditDetailsModal,
  AuditSearchModal,
  RoleDetailsModal,
  NewRoleModal
]

@NgModule({
  declarations: [ ...components],
  imports: [
    RouterModule,
    CommonModule,
    ComponentsModule,
    FormsModule,
  NgxSliderModule],
  exports: [...components],
  providers: [],
})
export class ModalsModule {
  
}
