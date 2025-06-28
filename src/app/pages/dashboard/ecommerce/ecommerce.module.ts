import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EcommerceRoutingModule } from './ecommerce.routing.module';
import { IndexComponent } from './index/index.component';
import DirectivesModule from '@directives/directives.module';
import { CommonModule } from '@angular/common';
import ComponentsModule from '@components/components.module';
import PipesModule from '@pipes/pipes.module';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';

const components = [
  IndexComponent,
  OrdersComponent,
  ProductsComponent
]

@NgModule({
  declarations: [ ...components],
  imports: [RouterModule,
    EcommerceRoutingModule, 
    DirectivesModule,
    PipesModule,
    CommonModule,
    ComponentsModule,
    FormsModule
  ],
  exports: [],
  providers: []//[provideNativeDateAdapter()],
})
export class EcommerceModule {
  
}
