import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TasksRoutingModule } from './tasks.routing.module';
import { IndexComponent } from './index/index.component';
import DirectivesModule from '@directives/directives.module';
import { CommonModule } from '@angular/common';
import ComponentsModule from '@components/components.module';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
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
    MatDatepickerModule, MatCardModule],
  exports: [],
  providers: [provideNativeDateAdapter()],
})
export class TasksModule {
  
}
