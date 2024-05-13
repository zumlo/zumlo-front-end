import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../../modules/ui/ui.module';

@Component({
  selector: 'z-mat-menu',
  standalone: true,
  imports: [CommonModule, UiModule],
  templateUrl: './mat-menu.component.html',
  styleUrl: './mat-menu.component.scss',
})
export class MatMenuComponent {
  @Input() config:any;
  @Output() changed = new EventEmitter();
}
