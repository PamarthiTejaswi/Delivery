import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  foodItems = [
    { name: 'Pizza', price: 10 },
    { name: 'Burger', price: 5 },
    { name: 'Pasta', price: 8 }
  ];

  addToCart(item: any) {
    console.log('Added to cart:', item);
  }
}