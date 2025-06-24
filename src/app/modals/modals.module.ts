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


const components = [
  NewTaskModal,
  NewUserModal,
  UserSearchModal,
  TransactionSearchModal
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
