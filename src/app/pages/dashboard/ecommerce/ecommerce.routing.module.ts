import { NgModule } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "orders", component: OrdersComponent },
]

@NgModule({
  imports: [],
  exports: [],
  providers: [provideRouter(routes)]
})
export class EcommerceRoutingModule {
  
}
