import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TasksRoutingModule } from './tasks.routing.module';
import { IndexComponent } from './index/index.component';
import DirectivesModule from '@directives/directives.module';
import { CommonModule } from '@angular/common';
import ComponentsModule from '@components/components.module';
import { GoalsComponent } from './goals/goals.component';
import { MessageComponent } from './message/message.component';
import PipesModule from '../../../pipes/pipes.module';

const components = [
  IndexComponent,
  GoalsComponent,
  MessageComponent
]

@NgModule({
  declarations: [ ...components],
  imports: [RouterModule,
    TasksRoutingModule, 
    DirectivesModule,
    PipesModule,
    CommonModule,
    ComponentsModule,
    ],
  exports: [],
  providers: [],
})
export class TasksModule {
  
}
