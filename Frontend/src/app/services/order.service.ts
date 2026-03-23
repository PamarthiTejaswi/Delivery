import { Injectable } from '@angular/core';
import { ApiService } from '../core/api.service';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private api: ApiService) {}

  placeOrder(data: any) {
    return this.api.post('customer/orders/place', data);
  }

}