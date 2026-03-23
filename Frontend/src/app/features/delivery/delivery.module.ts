import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryRoutingModule } from './delivery-routing.module';
import { DeliveryComponent } from './pages/delivery/delivery.component';

@NgModule({
  imports: [
    CommonModule,
    DeliveryRoutingModule,
    DeliveryComponent
  ]
})
export class DeliveryModule {}