import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import ComponentsModule from '@components/components.module';
import { NewTaskModal } from './new-task/new-task.component';


const components = [
  NewTaskModal
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
