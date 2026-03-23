import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'customer', loadComponent: () => import('./features/customer/pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'customer/cart', loadComponent: () => import('./features/customer/pages/cart/cart.component').then(m => m.CartComponent) },
  { path: 'customer/tracking', loadComponent: () => import('./features/customer/pages/tracking/tracking.component').then(m => m.TrackingComponent) },
  { path: 'delivery', loadComponent: () => import('./features/delivery/pages/delivery/delivery.component').then(m => m.DeliveryComponent) },
  { path: 'restaurant', loadComponent: () => import('./features/restaurant/pages/orders/orders.component').then(m => m.OrdersComponent) },
  { path: '', redirectTo: 'customer', pathMatch: 'full' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);