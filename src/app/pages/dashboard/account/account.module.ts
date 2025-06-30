import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountRoutingModule } from './account.routing.module';
import { IndexComponent } from './index/index.component';
import DirectivesModule from '@directives/directives.module';
import { CommonModule } from '@angular/common';
import ComponentsModule from '@components/components.module';
import PipesModule from '@pipes/pipes.module';
import { FormsModule } from '@angular/forms';

const components = [
  IndexComponent,
]

@NgModule({
  declarations: [ ...components],
  imports: [RouterModule,
    AccountRoutingModule, 
    DirectivesModule,
    PipesModule,
    CommonModule,
    ComponentsModule,
    FormsModule
  ],
  exports: [],
  providers: []
})
export class AccountModule {
  
}
