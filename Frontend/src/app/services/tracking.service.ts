import * as signalR from '@microsoft/signalr';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../core/api.service';
@Injectable({ providedIn: 'root' })
export class TrackingService {
  private hub!: signalR.HubConnection;

  start() {
    this.hub = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:5001/trackingHub')
      .build();

    this.hub.start();
  }

  onUpdate(callback: any) {
    this.hub.on('ReceiveTracking', callback);
  }
}