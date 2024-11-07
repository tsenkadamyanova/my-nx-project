import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-led',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-led.component.html',
  styleUrl: './status-led.component.scss',
})
export class StatusLedComponent {
  @Input() color: 'green' | 'red' = 'green';
}
