import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'z-pending-invites-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pending-invites-card.component.html',
  styleUrl: './pending-invites-card.component.scss',
})
export class PendingInvitesCardComponent {
  @Input() config:any;
  @Output() changed = new EventEmitter();
}
