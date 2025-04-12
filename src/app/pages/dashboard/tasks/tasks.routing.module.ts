import { NgModule } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { GoalsComponent } from './goals/goals.component';

const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "goals", component: GoalsComponent }
]

@NgModule({
  imports: [],
  exports: [],
  providers: [provideRouter(routes)]
})
export class TasksRoutingModule {
  
}
