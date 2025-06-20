import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EcommerceRoutingModule } from './ecommerce.routing.module';
import { IndexComponent } from './index/index.component';
import DirectivesModule from '@directives/directives.module';
import { CommonModule } from '@angular/common';
import ComponentsModule from '@components/components.module';
// import {provideNativeDateAdapter} from '@angular/material/core';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import {MatCardModule} from '@angular/material/card';
import PipesModule from '@pipes/pipes.module';
import { OrdersComponent } from './orders/orders.component';

const components = [
  IndexComponent,
  OrdersComponent
]

@NgModule({
  declarations: [ ...components],
  imports: [RouterModule,
    EcommerceRoutingModule, 
    DirectivesModule,
    PipesModule,
    CommonModule,
    ComponentsModule,
    //MatDatepickerModule, MatCardModule
  ],
  exports: [],
  providers: []//[provideNativeDateAdapter()],
})
export class EcommerceModule {
  
}
