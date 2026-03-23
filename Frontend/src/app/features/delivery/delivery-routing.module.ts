import { Routes, RouterModule } from '@angular/router';
import { DeliveryComponent } from './pages/delivery/delivery.component';

export const deliveryRoutes: Routes = [
  { path: '', component: DeliveryComponent }
];

export const DeliveryRoutingModule = RouterModule.forChild(deliveryRoutes);