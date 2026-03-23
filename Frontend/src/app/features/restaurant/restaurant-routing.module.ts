import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './pages/orders/orders.component';

export const restaurantRoutes: Routes = [
  { path: '', component: OrdersComponent }
];

export const RestaurantRoutingModule = RouterModule.forChild(restaurantRoutes);