import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html'
})
export class CartComponent {
  cart = [
    { name: 'Pizza', price: 10 },
    { name: 'Burger', price: 5 }
  ];

  placeOrder() {
    console.log('Order placed:', this.cart);
  }
}