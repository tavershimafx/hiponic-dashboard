import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import ComponentsModule from '@components/components.module';
import { NewTaskModal } from './new-task/new-task.component';
import { NewUserModal } from './new-user/new-user.component';


const components = [
  NewTaskModal,
  NewUserModal
]

@NgModule({
  declarations: [ ...components],
  imports: [
    RouterModule,
    CommonModule,
    ComponentsModule],
  exports: [...components],
  providers: [],
})
export class ModalsModule {
  
}
