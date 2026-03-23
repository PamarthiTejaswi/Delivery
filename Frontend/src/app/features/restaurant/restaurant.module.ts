import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantRoutingModule } from './restaurant-routing.module';
import { OrdersComponent } from './pages/orders/orders.component';

@NgModule({
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    OrdersComponent
  ]
})
export class RestaurantModule {}