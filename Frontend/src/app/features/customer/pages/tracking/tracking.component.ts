import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tracking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tracking.component.html'
})
export class TrackingComponent {
  status = 'In Progress';
  location = 'Restaurant';
}