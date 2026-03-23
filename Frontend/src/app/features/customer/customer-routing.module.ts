import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { TrackingComponent } from './pages/tracking/tracking.component';

export const customerRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'tracking', component: TrackingComponent }
];

export const CustomerRoutingModule = RouterModule.forChild(customerRoutes);