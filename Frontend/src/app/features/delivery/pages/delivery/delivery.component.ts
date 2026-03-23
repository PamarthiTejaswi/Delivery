import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delivery.component.html'
})
export class DeliveryComponent {
  deliveries = [
    { id: 101, location: 'Restaurant', status: 'Preparing' },
    { id: 102, location: 'Customer', status: 'On the way' }
  ];
}