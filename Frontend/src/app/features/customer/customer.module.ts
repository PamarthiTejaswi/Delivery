import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { TrackingComponent } from './pages/tracking/tracking.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    HomeComponent,
    CartComponent,
    TrackingComponent
  ]
})
export class CustomerModule {}