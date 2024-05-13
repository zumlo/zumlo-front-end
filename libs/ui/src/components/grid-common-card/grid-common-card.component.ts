import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../../modules/ui/ui.module';
import { MatMenuComponent } from '../mat-menu/mat-menu.component';

@Component({
  selector: 'z-grid-common-card',
  standalone: true,
  imports: [CommonModule, UiModule, MatMenuComponent],
  templateUrl: './grid-common-card.component.html',
  styleUrl: './grid-common-card.component.scss',
})
export class GridCommonCardComponent {
  @Input() config:any;
  @Output() changed = new EventEmitter();
}
