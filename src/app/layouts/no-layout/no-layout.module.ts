import { NgModule } from '@angular/core';
import { NoLayoutComponent } from './no-layout.component';
import { RouterModule } from '@angular/router';
import { NoLayoutRoutingModule } from './no-layout.routing.module';

const components = [
  NoLayoutComponent,
]

@NgModule({
  declarations: [ ...components],
  imports: [RouterModule, NoLayoutRoutingModule],
  exports: []
})
export class NoLayoutModule {
  
}
