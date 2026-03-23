import { Injectable } from '@angular/core';
import { ApiService } from '../core/api.service';
@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  constructor(private api: ApiService) {}

  updateLocation(data: any) {
    return this.api.put('delivery/location', data);
  }

  completeOrder(orderId: string) {
    return this.api.put(`delivery/complete/${orderId}`, {});
  }

}