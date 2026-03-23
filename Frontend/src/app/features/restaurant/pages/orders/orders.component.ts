import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.component.html'
})
export class OrdersComponent {
  orders = [
    { id: 1, status: 'Delivered' },
    { id: 2, status: 'In Progress' }
  ];
}